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
      // console.log("test", t, i);
      // if (t.classList.contains(`zone`)) {
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

// game.addEventListener("click", (e) => {
//   const t = e.target;
//   const zones = document.querySelectorAll(".zone");

//   // if (t.classList.contains("play-zone")) {
//   //   console.log("Zone -->", t);
//   // }

//   if (t.classList.contains("zone-1")) {
//     console.log("Zone 1 -->", t);
//   }
//   if (t.classList.contains("zone-2")) {
//     console.log("Zone-2 -->", t);
//   }
//   if (t.classList.contains("zone-3")) {
//     console.log("Zone-3 -->", t);
//   }
//   if (t.classList.contains("zone-4")) {
//     console.log("Zone-4 -->", t);
//   }
//   if (t.classList.contains("zone-5")) {
//     console.log("Zone-5 -->", t);
//   }
//   if (t.classList.contains("zone-6")) {
//     console.log("Zone-6 -->", t);
//   }
//   if (t.classList.contains("zone-7")) {
//     console.log("Zone-7 -->", t);
//   }
//   if (t.classList.contains("zone-8")) {
//     console.log("Zone-8 -->", t);
//   }
//   if (t.classList.contains("zone-9")) {
//     console.log("Zone-9 -->", t);
//   }
//   if (t.classList.contains("zone-10")) {
//     console.log("Zone-10 -->", t);
//   }
//   if (t.classList.contains("zone-11")) {
//     console.log("Zone-11 -->", t);
//   }
//   if (t.classList.contains("zone-12")) {
//     console.log("Zone-12 -->", t);
//   }

//   if (t.classList.contains("player-1-zone")) {
//     const nextZone = gameArr[1];
//     if (!nextZone) {
//       console.log("Undefined in next zone");
//       gameArr[1] = 1;
//       updateZones();
//     }
//     if (nextZone) {
//       console.log(nextZone, "<-- Next zone");
//     }
//     console.log("Player1 -->", t);
//   }
//   if (t.classList.contains("player-2-zone")) {
//     console.log("Player2 -->", t);
//   }
// });

function updateGame() {
  const player1 = document.querySelector(".player-1");
  const player2 = document.querySelector(".player-2");
  const zones = document.querySelectorAll(".zone");

  player1.querySelector("span").innerText = gameArr[0];
  player2.querySelector("span").innerText = gameArr[7];

  zones.forEach((zone, i) => {
    zone.innerHTML = gameArr[i];
    // console.log(zone, i);
  });
}

function init() {
  // gameArr = [20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0];
  gameArr = [20, 1, 2, 3, 4, 5, 6, 20, 8, 9, 10, 11, 12, 13];
  updateGame();
}

scoreBoard.addEventListener("click", (e) => {
  const t = e.target;
  if (t.classList.contains("player-1")) {
    console.log("Player 1 -->", t);
  }
  if (t.classList.contains("player-2")) {
    console.log("Player 2 -->", t);
  }
  if (t.classList.contains("play-btn")) {
    console.log("Play Button -->", t);
    init();
  } else if (t.classList.contains("reset-btn")) {
    console.log("Reset Button -->", t);
  }
});
