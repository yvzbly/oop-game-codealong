class Player {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 50 - this.width / 2;
      this.positionY = 0;
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
  