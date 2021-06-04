class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true,
            //'restitution':0,
            //'friction':1,
            //'density':0.1
        }
        //this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=213;
        this.wallthickness=20;
        this.image=loadImage("dustbingreen.png")
        this.side1=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallthickness,this.height,options);
        this.side2=Bodies.rectangle(this.x,this.y,this.wallthickness,this.height,options);
        this.side3=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallthickness,this.height,options);
        World.add(world,this.side1,this.side2,this.side3);


    }

    display(){
    var posbottom = this.side2.position;
    var posleft=this.side1.position;
    var posright=this.side3.position;
    push()
    translate (posleft.x,posleft.y)
    rectMode(CENTER)
    //fill("white")
     pop()
    //rect(this.body.position.x,this.body.position.y,this.width,this.height);

    push()
	translate(posright.x, posright.y);
    rectMode(CENTER)
	pop()



    push()
			translate(posbottom.x, posbottom.y+10);
			rectMode(CENTER)
			imageMode(CENTER);
			image(this.image,0,this.width,this,height);
			pop()

   }
}

  