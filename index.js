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

const accordion = document.querySelector('[data-js="accordion"]');

accordion.addEventListener("click", (e) => {
  const accordionHeaderId = e.target.dataset.accordionHeader;
  const clickedAccordionHeader = document.querySelector(
    `[data-accordion-header = "${accordionHeaderId}"]`
  );
  const accordionItemToBeOpened = document.querySelector(
    `[data-accordion-body = "${accordionHeaderId}"]`
  );

  clickedAccordionHeader.classList.toggle("active");
  accordionItemToBeOpened.classList.toggle("active");
});
