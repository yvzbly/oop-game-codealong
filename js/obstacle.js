class Obstacle {
    constructor() {
      this.width = 30;
      this.height = 10;
      this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
      this.positionY = 100;
      this.obstacleElm = null;
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
      this.positionY--;
      this.obstacleElm.style.bottom = this.positionY + "vh";
    }
  }