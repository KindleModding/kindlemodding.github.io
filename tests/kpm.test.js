// Run: node tests/kpm.test.js
// Loads static/kpmBrowser.js against fake repos: a hostile package, a malformed repo and an offline one.
const assert = require("assert"), fs = require("fs"), vm = require("vm");
const source = fs.readFileSync(__dirname + "/../static/kpmBrowser.js", "utf8");

const evilId = 'x" onerror="alert(1)';
const config = {
    repos: [{ url: "good" }, { url: "malformed" }, { url: "offline" }],
    hidden: [],
    apps: { [evilId]: { images: ["shot.png"] } }
};
const manifests = {
    good: { name: "Good", id: "good", packages: {
        [evilId]: { name: 'Evil" onmouseover="alert(2)', author: "a", description: "d", artifacts: [{ version: [1, 0] }] }
    } },
    malformed: { name: "Malformed", id: "malformed" } // no "packages"
};

// Runs the script as one page would and resolves with the HTML it rendered
function render(selector, search) {
    const target = { innerHTML: "" };
    const context = vm.createContext({
        baseUrl: "/", URLSearchParams, location: { search },
        navigator: { clipboard: {} }, // so copy buttons (data-copy attributes) are rendered too
        fetch: url => url === "/kpm-repos.json" ? Promise.resolve({ json: () => config })
            : manifests[url] ? Promise.resolve({ json: () => manifests[url] })
            : Promise.reject(new Error("offline")),
        document: { querySelector: s => s === selector ? target : null, querySelectorAll: () => [], addEventListener() {} }
    });
    vm.runInContext(source, context);
    return new Promise(resolve => setTimeout(() => resolve(target.innerHTML), 50));
}

const noInjectedAttribute = html => assert.ok(!/ on(error|mouseover)="/.test(html), "a quote escaped its attribute:\n" + html);

render("#kpm-app-list", "").then(html => {
    assert.ok(html.includes("Couldn't load 2 app sources"), "malformed and offline repos are counted, not fatal:\n" + html);
    assert.ok(html.includes("Evil&#34;"), "the good repo's app still renders");
    noInjectedAttribute(html);
    return render("#kpm-app-detail", "?repo=good&id=" + encodeURIComponent(evilId));
}).then(html => {
    assert.ok(html.includes("data-copy=") && html.includes("alt="), "app page rendered its attributes:\n" + html);
    noInjectedAttribute(html);
    console.log("kpm tests passed");
});
