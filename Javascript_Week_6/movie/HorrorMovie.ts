import { Movie } from "./Movie";

export class HorrorMovie extends Movie {
    private jump_scare: number;
    private ghost: string = "";
    private vision: string = "";

    constructor(title: string, director: string, language: string, run_time: number, year: number, jump_scare: number, ghost: boolean, vision: boolean) {
        super(title, director, language, run_time, year);
        this.jump_scare = jump_scare;
        this.setGhost(ghost);
        this.setVision(vision);
    }

    incrimentJumpScare() {
        this.jump_scare++;
    }

    private setGhost(res: boolean) {
        this.ghost = res ? "👻" : "🙅‍♀️";
    }

    private setVision(res: boolean) {
        this.vision = res ? "🔮" : "🙅‍♀️";
    }

    printHorrorMovie() {
        return `
        ============================ 
        Title: ${this.title}
        Director: ${this.director}
        Language: ${this.language}
        Run Time: ${this.run_time}
        Year: ${this.year}
        Jump Scare: ${this.jump_scare}
        Ghost: ${this.ghost}
        Vision: ${this.vision}
        ============================ \n`;
    }


}