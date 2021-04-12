const cards = [
  {
    link: "https://vizil-jaime-moreno.herokuapp.com/",
    repoLink: "https://github.com/xJIsaac/vizil-rpstry",
    title: "Vizil",
    img: "./images/vizil.png",
    info:
      "Vizil is a simplistic quote keeping application build on Ruby on Rails. The app uses PostgreSQL to store quotes. Adding a quote is done using the <i>Simple Form</i> gem which appears in a modal. Have fun adding a new quote.",
  },
  {
    link: "https://nomster-jaime-moreno.herokuapp.com/",
    repoLink: "https://github.com/xJIsaac/Nomster-JM",
    title: "Nomster",
    img: "./images/nomster.png",
    info:
      "Nomster is a Yelp clone build on Ruby on Rails. Users can create accounts, upload images, create a profile for a business, rate a business and comment on a business profile. The app also include the Google Maps API to display locations of each business. With the use of AWS S3 the application can store user's images.",
  },
  {
    link: "https://cognitio-jaime-moreno.herokuapp.com/courses#",
    repoLink: "https://github.com/xJIsaac/Cognitio",
    title: "Cognitio",
    img: "./images/cognitio.png",
    info:
      "Cognitio is a Udemy clone build on Ruby on Rails. User's can create accounts, upload images and videos, create courses, view courses and enroll in courses. The application even supports payment transactions via the <i>Stripe</i> API.",
  },
  {
    link: "https://thecheckmates-chessapp.herokuapp.com/",
    repoLink: "https://github.com/The-Check-Mates/ChessApp",
    title: "Chesster",
    img: "./images/chesster.png",
    info:
      "At the moment this application is still in development. Chesster is a Chess game application which incorporates all the rules of chess. The app is build on Ruby on Rails. The board features drag-n-drop for moving pieces. Players can create accounts and invite friends to play.",
  },
  {
    link: "https://empires-battle-app.herokuapp.com/",
    repoLink: "https://github.com/xJIsaac/Empires",
    title: "Empires",
    img: "./images/empires.png",
    info:
      "Empires is a battle simulation app which is build on Ruby on Rails. The application uses a simple algorithm which includes a bit chance to determine the winner of two armies. Anyone can create a new army and battle it against another.",
  },
];

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
