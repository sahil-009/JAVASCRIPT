class tringle{
    constructor(height ,width ,color){
    this.height=height
    this.width=width
    this.color=color
    }

    area(){
        const area =this.height * this.width
            return area;
    }
    print() {
        console.log(`colour is "${this.color}`)
    }


}
const tri =new tringle(2,7,`red`);
// const area = tri.area()
// console.log(area);
console.log(tri.area());
tri.print()


