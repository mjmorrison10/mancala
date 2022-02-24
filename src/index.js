import "./styles.css";

const game = document.querySelector(".game-board");
const scoreBoard = document.querySelector(".game");

let gameArr = [];
// const gameArr = [20, 1, 2, 3, 4, 5, 6, 20, 7, 8, 9, 10, 11, 12];
// const gameArr = [20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0];

function playMove() {
  const zones = document.querySelectorAll(".zone");

  zones.forEach((zone, index) => {
    const i = index;
    zone.addEventListener("click", (e) => {
      const gameIndex = gameArr[i];
      const t = e.target;
      if (gameIndex === 1) return;
      if (t.classList.contains(`zone`)) {
        i === 13
          ? (gameArr[i]--, gameArr[0]++)
          : (gameArr[i]--, gameArr[i + 1]++);

        updateGame();
        console.log(`Zone ${i}`, "gameIndex-->", gameIndex, "i -->", i);
      }
      // if (t.classList.contains(`zone-${i}`)) {
      //   console.log(`Zone ${i}`, "gameIndex-->", gameIndex, "i -->", i);
      // }

      // if (t.classList.contains("player-1-zone")) {
      //   console.log("player 1 zone", "gameIndex-->", gameIndex, "i -->", i);
      // }

      // if (t.classList.contains("player-2-zone")) {
      //   console.log("player 2 zone", "gameIndex-->", gameIndex, "i -->", i);
      // }

      // console.log(zone, i);
    });
  });
}

playMove();

function updateGame() {
  const player1 = document.querySelector(".player-1");
  const player2 = document.querySelector(".player-2");
  const zones = document.querySelectorAll(".zone");

  player1.querySelector("span").innerText = gameArr[0];
  player2.querySelector("span").innerText = gameArr[7];

  zones.forEach((zone, i) => {
    gameArr[i] === 0 ? (zone.innerHTML = "") : (zone.innerHTML = gameArr[i]);
    // console.log(zone, i);
  });
}

function init() {
  gameArr = [20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0];
  // gameArr = [20, 1, 2, 3, 4, 5, 6, 20, 8, 9, 10, 11, 12, 13];
  updateGame();
}

scoreBoard.addEventListener("click", (e) => {
  const t = e.target;
  if (t.classList.contains("player-1")) {
    console.log("Player 1 -->", t);
  }
  if (t.classList.contains("player-2")) {
    console.log("Player 2 -->", t);
  } else if (
    t.classList.contains("play-btn") ||
    t.classList.contains("reset-btn")
  ) {
    console.log("Play Button -->", t);
    init();
  }
});
