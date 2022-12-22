function geraNomeAleatorio() {
  // Lista de silabas possíveis
  const silabas = ["ma", "jo", "an", "pe", "ca", "lu", "ju", "ma", "ed"];

  // Gera um número aleatório de silabas para usar no nome
  const numSilabas = Math.ceil(Math.random() * 3);

  // Inicializa uma variável para armazenar o nome gerado
  let nome = "";

  // Concatena as silabas aleatórias e adiciona a primeira letra maiúscula
  for (let i = 0; i < numSilabas; i++) {
    // Gera um índice aleatório para acessar uma silaba da lista
    const indiceAleatorio = Math.floor(Math.random() * silabas.length);
    // Adiciona a silaba à variável nome
    nome += silabas[indiceAleatorio];
  }
  // Adiciona a primeira letra maiúscula
  nome = nome[0].toUpperCase() + nome.slice(1);

  // Retorna o nome gerado
  return nome;
}

// Testa a função
console.log(geraNomeAleatorio()); // Exemplo de saída: "Majo"
console.log(geraNomeAleatorio()); // Exemplo de saída: "Luca"

