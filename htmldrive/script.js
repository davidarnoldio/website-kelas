document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("schedule-table");
  const rows = table.querySelectorAll("tbody tr");
  const searchBar = document.getElementById("search-bar");

  // Add hover effect to rows
  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      row.style.cursor = "pointer";
    });

    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = "";
    });

    // Add click event to rows
    row.addEventListener("click", () => {
      const cells = Array.from(row.children);
      const details = cells.map((cell) => cell.innerText).join(" | ");
      alert(`You clicked on: ${details}`);
    });
  });

  // Add column highlight effect
  const cells = table.querySelectorAll("td, th");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const columnIndex = cell.cellIndex;
      highlightColumn(table, columnIndex, "rgba(255, 255, 255, 0.1)");
    });

    cell.addEventListener("mouseleave", () => {
      const columnIndex = cell.cellIndex;
      highlightColumn(table, columnIndex, "");
    });
  });

  // Highlight column function
  function highlightColumn(table, columnIndex, color) {
    const rows = table.rows;
    for (let row of rows) {
      const cell = row.cells[columnIndex];
      if (cell) {
        cell.style.backgroundColor = color;
      }
    }
  }

  // Add search functionality
  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    rows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      row.style.display = rowText.includes(query) ? "" : "none";
    });
  });
});

const announcements = [
  "Class project submission is due next Monday.",
  "Parent-teacher meeting scheduled for Friday.",
  "Don't forget to complete your homework on time!",
];

// Function to populate announcements
function populateAnnouncements() {
  const list = document.getElementById("announcement-list");
  announcements.forEach((announcement) => {
    const listItem = document.createElement("li");
    listItem.textContent = announcement;
    list.appendChild(listItem);
  });
}

// Run the function when the page loads
window.onload = populateAnnouncements;
