import ehUmCPF from "./js/valida-cpf.js";
import ehMaiorDeIdade from "./js/valida-idade.js";

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

// validações formulário

const camposDoFormulario = document.querySelectorAll("[required]");

// Cria evento para quando tirar o foco do input e será o gatilho para ativar o verificaCampo
camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

// tipos de erros mais comuns
const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

// Por que selecionamos estes cinco tipos de erros? Eles representam as ações mais comuns no preenchimento de um formulário.
// o valueMissing ocorre quando deixamos o campo vazio;
// o typeMismatch ocorre quando erramos o tipo de input no campo, como por exemplo, na inserção de um e-mail sem o símbolo @;
// o patternMismatch ocorre especialmente no campo de CPF que possui um padrão de expressão regular. Se o input não segui-lo, este erro será ativado;
// o tooShort está relacionado aos atributos minlength e maxLength que inserimos em diversos pontos do código. Ele serve para acusar quando os padrões de comprimento do input não forem atendidos;
// o customError se refere a erros customizados, como nos casos em que inserimos as lógicas de validação ehUmCPF e ehMaiorDeIdade.

const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 13 anos para se cadastrar.",
  },
};

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");
  if (campo.name == "cpf" && campo.value.length <= 11) {
    ehUmCPF(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }

  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
      console.log(mensagem);
    }
  });

  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const pessoa = {};
//   const caixaSelecao = document.querySelectorAll("select");

//   pessoa.nome = document.getElementById("nome").value;
//   caixaSelecao.forEach((element) => {
//     if (element.id == "setor") {
//       pessoa.setor = selecionarIngressoSetor(element.id);
//     } else if (element.id == "ingresso") {
//       pessoa.zona = selecionarIngressoSetor(element.id);
//     } else if (element.id == "data") {
//       pessoa.data = selecionarIngressoSetor(element.id);
//     }

//     console.log(pessoa);
//   });

//   pessoa.email = document.getElementById("email").value;
//   pessoa.cpf = document.getElementById("cpf").value;
//   pessoa.aniversario = document.getElementById("aniversario").value;

//   localStorage.setItem("comprador", JSON.stringify(pessoa));

//   window.location.href = "../ingresso.html";
// });

// function selecionarIngressoSetor(id) {
//   const lista = document.querySelector(`#${id}`).querySelectorAll("option");
//   let opcaoSelecionada = "";

//   lista.forEach((element) => {
//     if (element.selected) {
//       opcaoSelecionada = element.textContent;
//     }
//   });
// }

// const camposDoFormulario = document.querySelectorAll("[required]");
// const formulario = document.querySelector("[data-formulario]");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//     const nome_ok: e.target.elements["nome"].value
//     const email_ok: e.target.elements["email"].value
//     const aniversario_ok: e.target.elements["data"].value

//   localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
// });

// camposDoFormulario.forEach((campo) => {
//   campo.addEventListener("blur", () => verificaCampo(campo));
//   campo.addEventListener("invalid", (evento) => evento.preventDefault());
// });

// const tiposDeErro = [
//   "valueMissing",
//   "typeMismatch",
//   "patternMismatch",
//   "tooShort",
//   "customError",
// ];

// const mensagens = {
//   nome: {
//     valueMissing: "O campo de nome não pode estar vazio.",
//     patternMismatch: "Por favor, preencha um nome válido.",
//     tooShort: "Por favor, preencha um nome válido.",
//   },
//   email: {
//     valueMissing: "O campo de e-mail não pode estar vazio.",
//     typeMismatch: "Por favor, preencha um email válido.",
//     tooShort: "Por favor, preencha um e-mail válido.",
//   },
//   aniversario: {
//     valueMissing: "O campo de data de nascimento não pode estar vazio.",
//     customError: "Você deve ser maior que 18 anos para se cadastrar.",
//   },
// };

// function verificaCampo(campo) {
//   let mensagem = "";
//   campo.setCustomValidity("");
//   if (campo.name == "aniversario" && campo.value != "") {
//     ehMaiorDeIdade(campo);
//   }
// }
