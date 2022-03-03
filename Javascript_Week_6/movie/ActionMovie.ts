import uuid from 'uuid';
import { Movie } from './Movie';

export class ActionMovie extends Movie {
    private explotions: number;
    private guns: string = "";
    private martial: string = "";

    constructor(title: string, director: string, language: string, run_time: number, year: number, explotions: number, guns: boolean, martial: boolean) {
        super(title, director, language, run_time, year);
        this.explotions = explotions;
        this.setGuns(guns);
        this.setMartial(martial);
    }

    incrimentExplotions() {
        this.explotions++;
    }

    setGuns(res: boolean) {
        this.guns = res ? "🔫" : "🙅‍♀️";
    }

    setMartial(res: boolean) {
        this.martial = res ? "🥷" : "🙅‍♀️";
    }

    printActionMovie() {
        return `
        ============================ 
        Title: ${this.title}
        Director: ${this.director}
        Language: ${this.language}
        Run Time: ${this.run_time}
        Year: ${this.year}
        Explotions: ${this.explotions}
        Guns: ${this.guns}
        Martial: ${this.martial}
        ============================ \n`;
    }
    
}
