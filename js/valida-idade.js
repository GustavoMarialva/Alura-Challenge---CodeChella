export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  if (!idadePermitida(dataNascimento) && !idadeAcompanhado(dataNascimento)) {
    campo.setCustomValidity("Proibida entrada!");
  }
  if (!idadePermitida(dataNascimento) && idadeAcompanhado(dataNascimento)) {
    campo.setCustomValidity(
      "Entrada permitida apenas com a presença de um responsável maior de 18 anos."
    );
  }
}

function idadePermitida(data) {
  const dataAtual = new Date();
  const dataMais16 = new Date(
    data.getUTCFullYear() + 16,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual >= dataMais16;
}

function idadeAcompanhado(data) {
  const dataAtual = new Date();
  const dataMais13 = new Date(
    data.getUTCFullYear() + 13,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual >= dataMais13;
}
// Criaremos também a própria fuction validaIdade(), abaixo das chaves da seção ehMaiorDeIdade(campo). Esta função possuirá os seguintes elementos: a variável dataAtual que receberá a data do momento atual em que estamos; a variável dataMais18 que receberá os parâmetros de ano, mês e dia da data de nascimento inserida no campo e adicionará a ela uo número 16. Assim podemos saber em que ano aquela pessoa fez 16; um return que verificará se data atual é maior ou igual a dataMais16, confirmando que a pessoa usuária já completou 16 anos.
