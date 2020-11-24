class Paper {
    constructor(x, y){
        var option={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, 50, option);
        this.radius=50;
       

        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, 50, 50 );
    }
}