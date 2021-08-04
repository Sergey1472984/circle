class Circle {
    constructor(radius){
        this.radius = radius
    }
    square(){
        return this.square = Math.PI * this.radius ** 2
    }  
    static createDefault(){
        return new Circle(10)
    }
}

const circle10 = Circle.createDefault()

const circles = [21, 34, 15, 13].map((el) => new Circle(el))



