class Drop{
    constructor(x,y){
        var options = {
            density: 0.4,
            friction: 0.1,
            isStatic: false
            radius: 50;
        }

        this.body = Bodies.circle(x,y,options);
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
    updateY(){
        if(this.rain.position.y > height)
        { Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        } 
    }
}
