import { Rational } from "./Rational";

export class Main {
    start() {
        const r1 = new Rational(36, 120);
        console.log(r1.printRational());
        console.log(r1.toFloat()); // 0.3
        console.log(r1.reduce());
       
        console.log( r1.inverted());
       
       
    }

}
