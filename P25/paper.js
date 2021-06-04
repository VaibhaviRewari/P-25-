class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
        }
        this.x=x;
        this.y=y;        
        this.radius=radius
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x,y, (this.radius-20)/2,options);
        World.add(world,this.body);
  }

     display(){
     //fill("yellow");

    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
     //ellipseMode(RADIUS);
     //ellipse(this.body.position.x,this.body.position.y,this.radius,); 
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    
  }
}