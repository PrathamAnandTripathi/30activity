class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,30,40);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   

  display() {
    var pos =this.body.position;
  rectMode(CENTER);
  fill("white");
  rect(pos.x, pos.y, this.width, this.height);
    console.log(this.body.speed);
    if(this.body.speed<3){ 
  }
else{
World.remove(world, this.body);
push();
this.visibility = this.visibility-5;
tint (255,this.visibility)
image(this.image,this.body.position.x, this.body.position.y, 50, 50 )
pop();
}

  }
};

