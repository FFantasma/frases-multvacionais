function gerarAleatorio() {
  const phrases = [
    "Sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis. - Autor: José Alencar",
    "Nunca tivemos vergonha de roubar grandes ideais - Autor: Steve Jobs",
    "Nunca se compare a nignuém neste mundo. Caso o faça, entenda que você estará insultando a si mesmo. - Autor: Bill Gates"
  ];

  const frases = phrases[parseInt(Math.random() * (phrases.length - 1))];

  document.querySelector(".frase").innerHTML = frases;
}
