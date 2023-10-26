class Player {
  constructor() {
    this.positionX = 40;
    this.positionY = 0;
    this.height = 10;
    this.width = 20;
    const playerElm = document.getElementById("player");
    playerElm.style.width = this.width + "vw";
    playerElm.style.height = this.height + "vh";
    playerElm.style.left = this.positionX + "vw";
    playerElm.style.bottom = this.positionY + "vh";
    this.maxX = window.innerWidth - this.width; // block X axis
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX--;
      const elm = document.getElementById("player");
      elm.style.left = this.positionX + "vw";
      console.log(`Moving to the left... ${this.positionX}`);
    }
  }
  moveRight() {
    if (this.positionX < 80) {
      this.positionX++;
      const elm = document.getElementById("player");
      elm.style.left = this.positionX + "vw";
      console.log(`Moving to the right... ${this.positionX}`);
    }
  }
}

class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 85; //
    this.height = 10;
    this.width = 30;
    this.obstacleElm = null;
    this.maxY = window.innerHeight - this.height; // block Y axis

    this.createDomElement();
  }
  createDomElement() {
    // step1: create the element
    this.obstacleElm = document.createElement("div");

    // step2: add content or modify
    this.obstacleElm.classList.add("obstacle");
    this.obstacleElm.style.width = this.width + "vw";
    this.obstacleElm.style.height = this.height + "vh";
    this.obstacleElm.style.left = this.positionX + "vw";
    this.obstacleElm.style.bottom = this.positionY + "vh";

    // step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }
  moveDown() {
    if (this.positionY > 0) {
      this.positionY--;
      this.obstacleElm.style.bottom = this.positionY + "vh";
    }
  }
}

const player = new Player();

const obstaclesArr = []; // will store instances of the class Obstacle

// setInterval(() => {
//     ob1.moveDown();
// }, 50);

// create obstacles
setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 2000);

// move obstacles (ex. every XXXms, move all the obstacles that we have in the array)
setInterval(() => {
    obstaclesArr.forEach( (obstacleInstance) => {
        // move
        obstacleInstance.moveDown();

        // detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            // Collision detected!
            // alert("game over!")
            location.href = "./gameover.html";
        }
    });
}, 30);


document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
  }
});
