const cookie = document.querySelector(".cookie");
const cardClosed = document.querySelector(".card-closed");
const cardOpen = document.querySelector(".card-open");
const btn = document.querySelector(".btn");

cookie.addEventListener("click", () => {
   if (cardClosed.classList.contains("hide")) {
      cardClosed.classList.remove("hide");
      cardOpen.classList.add("hide");
   } else {
      cardOpen.classList.remove("hide");
      cardClosed.classList.add("hide");
   }
});

btn.addEventListener("click", () => {
   if (cardClosed.classList.contains("hide")) {
      cardClosed.classList.remove("hide");
      cardOpen.classList.add("hide");
   } else {
      cardOpen.classList.remove("hide");
      cardClosed.classList.add("hide");
   }
});
