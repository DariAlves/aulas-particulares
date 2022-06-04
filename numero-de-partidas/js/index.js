const totalPartidas = numeroTimes => {
  if (numeroTimes <= 1)
    return `Não é possível acontecer nenhuma partida, porque o número de times é insuficiente`;

  let timesRestantes = numeroTimes;
  let quantidadePartidas = [];

  while (timesRestantes > 1) {
    if (timesRestantes % 2 === 0) {
      quantidadePartidas.push(Math.floor(timesRestantes / 2));
      timesRestantes = Math.floor(timesRestantes / 2) + (timesRestantes % 2);
    } else {
      quantidadePartidas.push(Math.floor(timesRestantes / 2));
      timesRestantes = Math.floor(timesRestantes / 2) + (timesRestantes % 2);
    }
  }

  // return quantidadePartidas;

  //! Método reduce

  // return quantidadePartidas.reduce(
  //   (valorPrev, valorAtual) => valorPrev + valorAtual
  // );

  //! For loop
  const total = array => {
    let totalP = 0;

    for (let i = 0; i < array.length; i++) {
      totalP += array[i];
    }

    return totalP;
  };

  return total(quantidadePartidas);
};

console.log(totalPartidas(8));

/**
 * ! Se o total de times for menor ou igual a 1, não há partida
 * ! Número de partidas é igual a numeros de times / 2;
 * ! Número de times restante é igual o número de times / 2 mais o resto da divisão do número de times / 2
 * ! Enquanto time restante for maior que 1, faça algo. Por que maior do que um? Porque um time não pode jogar sozinho.
 */
