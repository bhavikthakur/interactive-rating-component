const btns = document.querySelectorAll(".card__btn");
let rating = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      rating = "";
      return;
    }

    btns.forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    rating = `You selected ${target.textContent} out of 5`;
  });
});

const mainCard = document.querySelector(".card");
const secondaryCard = document.querySelector(".card--thankyou");
const submit = document.querySelector(".card__submit");
const rate = document.querySelector(".card__rating");
const error = document.querySelector(".card__error");
submit.addEventListener("click", (e) => {
  if (!rating) {
    error.classList.remove("hidden");
  } else {
    mainCard.classList.add("hidden");
    secondaryCard.classList.remove("hidden");
    rate.textContent = rating;
  }
});
