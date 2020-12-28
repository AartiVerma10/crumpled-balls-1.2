class Dustbin{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body=Bodies.rectangle(970,400,10,30,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/dustbin.png");

        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,180,180);
        
        pop();
        
    }

}