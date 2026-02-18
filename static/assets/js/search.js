document.addEventListener("DOMContentLoaded", () => {
  let searchIndex = [];
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  fetch("/index.json")
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

    const results = searchIndex.filter((item) => {
      return (
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.content && item.content.toLowerCase().includes(query))
      );
    });

    displayResults(results);
  }

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
    } else {
      // If input is not empty search again
      handleSearchInteraction(e);
    }
  });

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML =
        '<div style="padding: 0.5em; color: var(--text-colour);">No results found</div>';
    } else {
      const ul = document.createElement("ul");
      results.slice(0, 10).forEach((result) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = result.permalink;
        a.textContent = result.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      searchResults.innerHTML = "";
      searchResults.appendChild(ul);
    }
    searchResults.style.display = "block";
  }
});
