class Attach{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.05,
            length : 200
        }
        this.body=Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        var point1 = this.body.bodyA.position;
        var point2 = this.body.bodyB.position;
        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);
    }
}