const userPortfolios = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

document.addEventListener("DOMContentLoaded", () => {
  const portfolioEl = document.querySelector(".portfolio");

  portfolioEl.innerHTML = userPortfolios
    .map((portfolio) => `<div class="site">${portfolio}</div>`)
    .join("");
});
