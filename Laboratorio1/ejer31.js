class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    suma(punto){
        punto.x  += this.x;
        punto.y += this.y;
        return punto;
    }
    toString() {
        return `Punfto{x:${this.x}, y:${this.y}}`;
    }
}
punto1 = new Punto(1, 2);
punto2 = new Punto(4, 2);
console.log(punto1.suma(punto2).toString());