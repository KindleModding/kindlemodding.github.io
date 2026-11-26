// App cards (find-more-apps) and per-app pages (app.html) built live from the KPM repos in kpm-repos.json.
// Escapes quotes too: repo data from other people ends up inside HTML attributes
function escapeHtml(text) {
    return String(text == null ? "" : text).replace(/[&<>"']/g, c => "&#" + c.charCodeAt(0) + ";");
}

function command(text) {
    const copy = navigator.clipboard ? ` <button class="kpm-copy" data-copy="${escapeHtml(text)}">Copy</button>` : ""; // no clipboard on http or the Kindle browser
    return `<code>${escapeHtml(text)}</code>${copy}`;
}

let failedRepos = 0;

function loadApps() {
    return fetch(`${baseUrl}kpm-repos.json`).then(response => response.json()).then(config =>
        Promise.all(config.repos.map(repo =>
            fetch(repo.url).then(response => response.json()).then(manifest => {
                return Object.keys(manifest.packages).filter(id => config.hidden.indexOf(id) < 0).map(id => {
                    const pkg = manifest.packages[id], info = config.apps[id] || {};
                    return { id, name: pkg.name, author: pkg.author, description: pkg.description,
                        version: pkg.artifacts[pkg.artifacts.length - 1].version.join("."),
                        source: info.source, images: info.images || [],
                        repo: manifest.name, repoId: manifest.id, repoUrl: repo.url, builtin: !!repo.builtin };
                });
            }).catch(() => { failedRepos++; return []; }) // offline or malformed repo: skip it, keep the rest
        )).then(lists => [].concat.apply([], lists)));
}

function cardHtml(app) {
    const href = `./app.html?repo=${encodeURIComponent(app.repoId)}&id=${encodeURIComponent(app.id)}`;
    const tags = [app.repo];
    return `<a class="card kpm-card" href="${href}">
        <span class="kpm-card-title">${escapeHtml(app.name)}</span>
        <span class="kpm-desc">${escapeHtml(app.description)}</span>
        <span class="kpm-card-foot">${tags.map(t => `<span class="kpm-tag">${escapeHtml(t)}</span>`).join("")}<span class="kpm-chevron" aria-hidden="true">›</span></span>
    </a>`;
}

function renderCards(apps, groupBy) {
    const sorted = apps.slice().sort((a, b) =>
        (groupBy === "name" ? 0 : a[groupBy].localeCompare(b[groupBy])) || a.name.localeCompare(b.name));
    const groups = [];
    sorted.forEach(app => {
        const key = groupBy === "name" ? "" : app[groupBy];
        if (!groups.length || groups[groups.length - 1].key !== key) groups.push({ key, apps: [] });
        groups[groups.length - 1].apps.push(app);
    });
    const warning = failedRepos ? `<p class="warning">Couldn't load ${failedRepos} app source${failedRepos > 1 ? "s" : ""}, so some apps may be missing. Refresh to try again.</p>` : "";
    document.querySelector("#kpm-app-list").innerHTML = warning + groups.map(group =>
        (group.key ? `<h3 class="kpm-group-title">${escapeHtml(group.key)} <span class="kpm-count">${group.apps.length}</span></h3>` : "") +
        `<div class="kpm-cards">${group.apps.map(cardHtml).join("")}</div>`
    ).join("") || "<p>No apps found.</p>";
    document.querySelectorAll("[data-group]").forEach(button =>
        button.setAttribute("aria-pressed", button.dataset.group === groupBy));
}

function renderDetail(apps) {
    const params = new URLSearchParams(location.search);
    const app = apps.filter(a => a.repoId === params.get("repo") && a.id === params.get("id"))[0];
    const detail = document.querySelector("#kpm-app-detail");
    if (!app) {
        detail.innerHTML = `<h1>App not found</h1><p>This app may have been removed from its repo. <a href="./find-more-apps.html">See all apps</a>.</p>`;
        return;
    }
    document.title = `KindleModding - ${app.name}`;
    const steps = [];
    if (!app.builtin) steps.push([`Add the ${escapeHtml(app.repo)} repo`, "You only need to do this once per repo. Skip it if you've added it before.", ";kpm add-repo " + app.repoUrl]);
    steps.push(["Refresh the list of apps", "", ";kpm update"]);
    steps.push([`Install ${escapeHtml(app.name)}`, "It appears on your homescreen like a book. The icon may take a moment.", ";kpm install " + app.id]);
    const tags = [app.repo, "Version " + app.version, "By " + app.author];

    detail.innerHTML = `<nav class="kpm-crumbs"><a href="./find-more-apps.html">Find More Apps</a> › ${escapeHtml(app.name)}</nav>
        <h1>${escapeHtml(app.name)}</h1>
        <p>${escapeHtml(app.description)}</p>
        <div class="kpm-card-foot">${tags.map(t => `<span class="kpm-tag">${escapeHtml(t)}</span>`).join("")}</div>
        ${app.source ? `<p><a href="${escapeHtml(app.source)}">Source code ↗</a></p>` : ""}
        ${app.images.length ? `<div class="kpm-gallery">${app.images.map((src, i) =>
            `<a href="${escapeHtml(src)}"><img src="${escapeHtml(src)}" alt="Screenshot ${i + 1} of ${escapeHtml(app.name)}"></a>`).join("")}</div>` : ""}
        <h2>Install</h2>
        <p>Connect your Kindle to Wi-Fi, then type each command into the searchbar on your homescreen and press enter.</p>
        ${steps.map((step, i) => `<div class="kpm-install-row"><span class="kpm-num">${i + 1}</span><div>
            <b>${step[0]}</b>${step[1] ? `<p class="kpm-meta">${step[1]}</p>` : ""}<p>${command(step[2])}</p>
        </div></div>`).join("")}
        <details class="kpm-ref"><summary>Remove this app</summary><p>${command(";kpm uninstall " + app.id)}</p></details>`;
}

loadApps().then(apps => {
    if (document.querySelector("#kpm-app-detail")) return renderDetail(apps);
    renderCards(apps, "repo");
    document.querySelectorAll("[data-group]").forEach(button =>
        button.addEventListener("click", () => renderCards(apps, button.dataset.group)));
}).catch(() => {
    const target = document.querySelector("#kpm-app-list") || document.querySelector("#kpm-app-detail");
    target.innerHTML = "<p>Couldn't load the app list. Check your internet connection and refresh.</p>";
});

document.addEventListener("click", event => {
    const button = event.target.closest(".kpm-copy");
    if (!button) return;
    navigator.clipboard.writeText(button.dataset.copy).then(() => { button.textContent = "Copied"; }, () => {});
});
