import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const dadosComprador = {
    nome: e.target.elements["nome"].value,
    email: e.target.elements["email"].value,
    cpf: e.target.elements["cpf"].value,
    aniversario: e.target.elements["aniversario"].value,
    setor: e.target.elements["setor"].value,
    tipoIngresso: e.target.elements["tipoIngresso"].value,
    dataEvento: e.target.elements["dataEvento"].value,
  };

  localStorage.setItem("comprador", JSON.stringify(dadosComprador));

  window.location.href = "./ingresso.html";
});

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
