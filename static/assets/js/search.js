document.addEventListener("DOMContentLoaded", () => {
  let searchIndex = [];
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  let results = []

  if (!searchInput || !searchResults) return;

  fetch("/search_index.json")
    .then((response) => response.json())
    .then((data) => {
      searchIndex = data;
    })
    .catch((error) => console.error("Error fetching search index:", error));

  searchInput.addEventListener("input", handleSearchInteraction);

  function handleSearchInteraction(e) {
    const query = e.target.value.toLowerCase();

    if (query.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    results = searchIndex.filter((item) => {
      return (
        item.t.toLowerCase().includes(query) ||
        item.c.toLowerCase().includes(query)
      );
    });

    displayResults();
  }

  
  document.addEventListener("mousedown", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
    }
  });

  searchInput.addEventListener("focusin", (e) => {
    displayResults();
  });

  function displayResults() {
    if (results.length === 0) {
      searchResults.innerHTML = `<div style="padding: 0.5em; color: var(--text-colour);">No results found</div>`;
    } else {
      const ul = document.createElement("ul");
      results.forEach((result) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = result.a;
        a.textContent = result.t;
        li.appendChild(a);
        ul.appendChild(li);
      });
      searchResults.innerHTML = ``;
      searchResults.appendChild(ul);
    }
    searchResults.style.display = "block";
  }
});
