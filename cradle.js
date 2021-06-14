class Cradle {
    constructor(x, width, height){
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x, 500, width, height);
        this.image = loadImage("1.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}