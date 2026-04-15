const player1 = {
    NOME: "Kevin",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Bob",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};
const player3 = {
    NOME: "Stuart",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

const player4 = {
    NOME: "Gru",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 5,
    PONTOS: 0,
};

const player5 = {
    NOME: "Dr. Nefario",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

const player6 = {
    NOME: "Minion Mal",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};
async function rollDice() {
  console.log("🎲 Girando a banana da sorte...");
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "CORRIDA_COM_BANANA 🍌";
      break;
    case random < 0.66:
      result = "LABORATORIO_DO_GRU 🧪";
      break;
    default:
      result = "BRIGA_DE_MINIONS 💥";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 mandou no ${block}! ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁🍌 Rodada ${round} - Corrida maluca dos Minions!`);

    let block = await getRandomBlock();
    console.log(`📍 Desafio: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "CORRIDA_COM_BANANA 🍌") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "corrida com banana 🍌",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "corrida com banana 🍌",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "LABORATORIO_DO_GRU 🧪") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "experimentos malucos 🧪",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "experimentos malucos 🧪",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    if (block === "BRIGA_DE_MINIONS 💥") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(
        `💥 ${character1.NOME} e ${character2.NOME} começaram uma briga por banana!!! 🍌`
      );

      await logRollResult(
        character1.NOME,
        "bagunça total 💥",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "bagunça total 💥",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu a confusão! ${character2.NOME} escorregou na banana e perdeu 1 ponto 😂`
        );
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu a confusão! ${character1.NOME} escorregou na banana e perdeu 1 ponto 😂`
        );
        character1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "🤡 Os dois caíram juntos! Empate na bagunça!"
          : ""
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} pegou uma banana e marcou ponto! 🍌`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} pegou uma banana e marcou ponto! 🍌`);
      character2.PONTOS++;
    }

    console.log("🍌-----------------------------🍌");
  }
}

async function declareWinner(character1, character2) {
  console.log("🏁 Resultado final da corrida dos Minions!");
  console.log(`${character1.NOME}: ${character1.PONTOS} banana(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} banana(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} é o Minion supremo! BANANA!!! 🍌🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} é o Minion supremo! BANANA!!! 🍌🏆`);
  else console.log("🤝 Empate! Os dois ganharam bananas!");
}

(async function main() {
  console.log(
    `🍌🚨 Corrida maluca dos Minions entre ${player1.NOME} e ${player2.NOME} começando!!!\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();