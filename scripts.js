  function gerarAleatorio() {

    const phrases = [
      "Gaste o seu tempo ganhando a vida! pensando mais nas soluções do que se preocupando com os problemas",
      "O segredo da vida é ter tudo que você quer. Mas amar tudo que você tem",
      "Conheça seus pontos fortes",
      "Aprenda a gostar e a cuidar de você",
      "Fale oi para pessoas na rua, bom dia, boa tarde",
      "Matricule se em algum curso de inglês, acadeimia, qualquer coisa",
      "Acredite em você e se desafie, vocêe consegue, basta acreditar",
      "Tenha ao seu lado, pessoas que consegue ver o que há de melhor em você, mesmo quando você não consegue",
      "Regras de sucesso: acorde cedo, não reclame, seja gentil, evite pessoas negativas, nunca fique mas de 3 dias sem fazer exercícios, encontre tempo para ler todos os dias",
      "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis",
      "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho",
      "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?",
      "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre",
      "Só existe um êxito: a capacidade de levar a vida que se quer",
      "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo",
      "A coragem não é ausência do medo; é a persistência apesar do medo.",
      "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos",
      "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível",
      "Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada",
      "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante",
      "Força de ânimo e coragem na adversidade servem para conquistar o êxito, mais do que um exército",
      "Dois homens não podem passar meia hora juntos sem que um conquiste uma evidente superioridade em relação ao outroCreia em si, mas não duvide sempre dos outros",
      "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz",
      "Talento é dom, é graça. E sucesso nada tem haver com sorte, mas com determinação e trabalho",
      "Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem",
      "As únicas grandes companhias que conseguirão ter êxito são aquelas que consideram os seus produtos obsoletos antes que os outros o façam",
      "Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito",
    ];
  
    const frases = (phrases[parseInt(Math.random() * (phrases.length - 1))]);

    document.querySelector(".frase").innerHTML = (frases);

  }
