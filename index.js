import { cards } from "./cards.js";

function render({ title, link, repoLink, img, info }) {
  return `
    <!-- ${title} -->
    <div class="container column">
      <div class="space-between v-center no-margin">
        <a href="${link}">
          <h3>${title}</h3>
        </a>
        <a href="${repoLink}">
          Repo
        </a>
      </div>
      <a href="${link}">
        <img src="${img}" />
      </a>
      <p>${info}</p>
    </div>
  `;
}

function loadPortfolio() {
  const portfolioList = document.querySelector("#portfolio > div");
  cards.forEach((card) => {
    portfolioList.innerHTML += render(card);
  });
}

window.addEventListener("DOMContentLoaded", loadPortfolio);
