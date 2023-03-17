export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validaIdade(dataNascimento);

  console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais16 = new Date(
    data.getUTCFullYear() + 16,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  const dataMais13 = new Date(
    data.getUTCFullYear() + 13,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  if (dataAtual >= dataMais16) {
    return dataAtual >= dataMais16;
  } else if (dataAtual <= dataMais13) {
    return dataAtual <= dataMais13;
  } else {
    return "Não pode ir";
  }
}

// Criaremos também a própria fuction validaIdade(), abaixo das chaves da seção ehMaiorDeIdade(campo). Esta função possuirá os seguintes elementos: a variável dataAtual que receberá a data do momento atual em que estamos; a variável dataMais18 que receberá os parâmetros de ano, mês e dia da data de nascimento inserida no campo e adicionará a ela uo número 16. Assim podemos saber em que ano aquela pessoa fez 16; um return que verificará se data atual é maior ou igual a dataMais16, confirmando que a pessoa usuária já completou 16 anos.
