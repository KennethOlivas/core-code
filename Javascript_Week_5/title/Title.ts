export class Title {
    letter: string;
    number: number;

    constructor(letter: string, number: number) {
        this.letter = letter;
        this.number = number;
    }
    
    printTile() {
        console.log(`Letter: ${this.letter} \nValue: ${this.number}\n`);
    }
}