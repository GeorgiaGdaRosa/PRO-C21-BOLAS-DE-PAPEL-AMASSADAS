class Ground {
    constructor(x,y,w,h){
        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)

        this.w = w 
        this.h = h
    }

    display(){
        var groundObj = this.body.position
        rect(groundObj.x,groundObj.y,this.w,this.h)
      
        
    }
}
    