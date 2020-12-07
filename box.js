class Dustbin {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     Matter.Body.setAngle(this.body, this.angle);
      World.add(world, this.body);
    }
    display(){
      var dustbinPos=this.body.position;
     
			push()
			translate(dustbinPos.x, dustbinPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.width, this.height);
			pop()

    }
  }
  