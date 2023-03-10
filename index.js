const perguntas = document.querySelectorAll(".pergunta__card__titulo");

perguntas.forEach((element) => {
  element.addEventListener("click", () => {
    const elemento = element.parentNode;
    const resposta = elemento.querySelector(
      ".pergunta__card__resposta"
    ).classList;
    const respostaUp = elemento.querySelector(".fa-caret-up").classList;
    const respostaDown = elemento.querySelector(".fa-caret-down").classList;
    resposta.toggle("hidden");
    respostaUp.toggle("hidden");
    respostaDown.toggle("hidden");
  });
});

// const accordion = document.querySelector('[data-js="accordion"]');

// accordion.addEventListener("click", (e) => {
//   const accordionHeaderId = e.target.dataset.accordionHeader;
//   const clickedAccordionHeader = document.querySelector(
//     `[data-accordion-header = "${accordionHeaderId}"]`
//   );
//   const accordionItemToBeOpened = document.querySelector(
//     `[data-accordion-body = "${accordionHeaderId}"]`
//   );

//   clickedAccordionHeader.classList.toggle("active");
//   accordionItemToBeOpened.classList.toggle("active");
// });

const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};
