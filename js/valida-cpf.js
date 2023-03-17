export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");
  validaNumerosRepetidos(cpf);

  console.log(validaNumerosRepetidos(cpf));
}
// A função ehUmCPF foi configurada para ser exportada como padrão, ou seja, quando chamarmos o arquivo valida-cpf esta função será retornada. Criamos também uma função tradicional que receberá o valor de campo com o método replace, que por sua vez recebe dois parâmetros: o primeiro indica o conteúdo que queremos substituir (no caso, os caracteres especiais . e -), enquanto o segundo indica o conteúdo que será utilizado para substituí-lo (no caso, um campo vazio). Através desta função, efetuamos a remoção dos caracteres especiais nos casos de inputs com essa característica, normalizando esses valores e tornando mais fácil a comparação e validação entre os tipos de CPF inseridos.

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
