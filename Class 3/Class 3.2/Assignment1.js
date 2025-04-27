class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width * this.height;
    }

    printColor(){
        console.log("The color is " + this.color);
    }

    destroy(){

    }
}

const rect = new Rectangle(2, 4, "Red");
const rectArea = rect.area();
rect.destroy();
console.log(rectArea);