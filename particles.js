class Particle {
    constructor(x,y){
        var options = {
            'restitution': 1,
            'friction': 0,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.r=10;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.color = color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body);
    }
    display(){
        push()
        fill(this.color);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop()
    }
} 