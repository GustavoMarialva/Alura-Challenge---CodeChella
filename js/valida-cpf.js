export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");

  if (
    validaNumerosRepetidos(cpf) ||
    validaPrimeiroDigito(cpf) ||
    validaSegundoDigito(cpf)
  ) {
    console.log("Esse cpf não existe");
  } else {
    console.log("Existe");
  }
}
// A função ehUmCPF foi configurada para ser exportada como padrão, ou seja, quando chamarmos o arquivo valida-cpf esta função será retornada. Criamos também uma função tradicional que receberá o valor de campo com o método replace, que por sua vez recebe dois parâmetros: o primeiro indica o conteúdo que queremos substituir (no caso, os caracteres especiais . e -), enquanto o segundo indica o conteúdo que será utilizado para substituí-lo (no caso, um campo vazio). Através desta função, efetuamos a remoção dos caracteres especiais nos casos de inputs com essa característica, normalizando esses valores e tornando mais fácil a comparação e validação entre os tipos de CPF inseridos.

// if validou cada uma das funções e caso alguma delas dê true, retornará cpf invalido.

function validaNumerosRepetidos(cpf) {
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[9];
}

// no interior da função, criaremos um laço de repetição for que possuirá a variável let tamanho = 0, a qual determinaremos que deve se repetir nove vezes (para os 9 primeiros dígitos do CPF) através do comando tamanho < 9; tamanho++. Em seguida adicionaremos no interior das chaves deste for a variável soma que declaramos anteriormente e que agora deverá recolher os valores do CPF de acordo com cada posição do for. Em seguida vamos multiplicá-lo pelo valor de multiplicador. Na linha de baixo adicionaremos o comando multiplicador-- que completará o loop duplo no qual o CPF aumenta a posição do tamanho enquanto o multiplicador a diminui.
// Este trecho de código retornará o final da multiplicação de cada dígito do CPF e também a soma total dessas multiplicações na variável soma. Abaixo do for vamos adicionar o valor final de soma, multiplicá-lo por 10 e dividi-lo por 11. Em seguida adicionaremos a condicional if para transformar em 0 os valores que resultarem em 10 ou 11. Também será adicionado um return comparando o valor final de soma com a posição 9 do CPF.
// exemplo: se utilizarmos o CPF "937.777.040-83" como base, a soma devolvida pelo for será 311. Portanto o resultado da operação 311 = (311 * 10) % 11; nos retornará o resultado 8. Neste caso, nosso CPF não entrará no if e será devolvido o valor 8.
function validaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;
  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[10];
}
// A função validaSegundoDigito foi criada com a mesma lógica de sua antecessora. Apenas acrescentamos o primeiro dígito ao cálculo, pois este já terá sido verificado pela função anterior.
