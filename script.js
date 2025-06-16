const respostasCertas = ["b", "a", "b", "b", "b", "a", "a"];

const codigosLiberados = [
`function geraRecomendacao(idade, seuGenero1, seuGenero2) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "NOME DO SEU FILME";`,

`    } else {
      if (idade >= 12) {
        if(seuGenero1 || seugenero2) {
          return "NOME DO SEU FILME";`,

`        } else{
         return "NOME DO SEU FILME";
        }`,

`      } else {
        if (seuGenero1) {
          return "NOME DO SEU FILME";
        } else {`,

`          return "NOME DO SEU FILME";
        }
      }
    }
  } else {`,

`    if (seugenero1) {
      return "NOME DO SEU FILME";
    } else {`,

`      return "NOME DO SEU FILME"; 
    }
  }
}`
];

function verificarResposta(etapa) {
    let respostaUsuario = document.getElementById("resposta" + etapa).value.trim().toLowerCase();

    if (respostaUsuario === respostasCertas[etapa - 1]) {
        document.getElementById("codigo" + etapa).textContent = codigosLiberados[etapa - 1];
        alert("Correto! Parte do código liberada!");
        if (etapa < 7) {
            document.getElementById("etapa" + (etapa + 1)).classList.remove("escondido");
        } else {
            alert("Parabéns! Você montou a função completa!");
        }
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

