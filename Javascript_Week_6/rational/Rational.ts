export class Rational {
    numerator: number;
    denominator: number;
    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    toFloat() {
        return this.numerator / this.denominator;
    }

    printRational() {
        return `${this.numerator} / ${this.denominator}`
    }

    inverted() {
        return new Rational(this.denominator, this.numerator);
    }

    //Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through
    reduce() {
        let gcd = function gcd(a: number, b: number): number {
            return b ? gcd(b, a % b) : a;
        };
        let divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
        return this;
    }
        
    any() {
        return this.any
    }
        

}