class Ground1 {
    constructor(x, y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 800, 20, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
  }
  