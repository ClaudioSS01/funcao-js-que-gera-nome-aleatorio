function geraNomeAleatorio() {
  const silabas = ["br", "cr", "dr", "fr", "gr", "pr", "tr", "bl", "cl", "fl", "gl", "pl", "tl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"];
  const consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  const vogais = ["a", "e", "i", "o", "u"];

  let nome = "";
  let ultima_letra_foi_consoante = false;

  while (nome.length < 3) {
    let nova_silaba = "";

    // Adiciona uma consoante
    if (ultima_letra_foi_consoante || nome.length === 0) {
      nova_silaba += escolherAleatoriamente(consoantes);
      ultima_letra_foi_consoante = true;
    }

    // Adiciona uma vogal
    nova_silaba += escolherAleatoriamente(vogais);
    ultima_letra_foi_consoante = false;

    // Adiciona uma consoante ou uma dígrafo
    if (Math.random() < 0.5) {
      nova_silaba += escolherAleatoriamente(consoantes);
      ultima_letra_foi_consoante = true;
    } else {
      nova_silaba += escolherAleatoriamente(silabas);
      ultima_letra_foi_consoante = false;
    }

    // Adiciona a nova sílaba ao nome
    nome += nova_silaba;
  }

  // Coloca a primeira letra em maiúscula
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}
