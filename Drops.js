class Drop{
    constructor(x,y){
        var options = {
            density: 0.4,
            friction: 0.1,
            isStatic: false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        
        push();
        transform(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.width, this.weight);
        pop();

    }
}