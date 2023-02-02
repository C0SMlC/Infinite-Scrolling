const card = document.querySelector(".cards");

const cards = document.querySelectorAll(".card");

const html = `<p class="card">I am a card</p>`;

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         card.insertAdjacentHTML("beforeend", html);
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     rootMargin: "-10rem",
//   }
// );

// cards.forEach((cardc) => {
//   observer.observe(cardc);
// });

const lastchildObserver = new IntersectionObserver(
  (entries) => {
    const cd = entries[0];
    if (!cd.isIntersecting) return;
    loadNewCard();
    lastchildObserver.unobserve(cd.target);
    lastchildObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    threshold: 1,
  }
);

lastchildObserver.observe(document.querySelector(".card:last-child"));

const loadNewCard = function () {
  for (let index = 0; index < 10; index++) {
    card.insertAdjacentHTML("beforeend", html);
  }
};
