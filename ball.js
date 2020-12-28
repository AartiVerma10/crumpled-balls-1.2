class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.4,
            'isStatic':false
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("sprites/paper.png");
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50);
        
        pop();
        
    }
  
}