import uuid from 'uuid';


export class Movie {
    protected id: string;
    protected title: string;
    protected director: string;
    protected language: string;
    protected run_time: number;
    protected year: number;

    constructor(title: string, director: string, language: string, run_time: number, year: number) {
        this.id = uuid.v4();
        this.title = title;
        this.director = director;
        this.language = language;
        this.run_time = run_time;
        this.year = year;
    }

    get getId(): string {
        return this.id;
    }

    get getTitle(): string {
        return this.title;
    }

    get getDirector(): string {
        return this.director;
    }

    get getLanguage(): string {
        return this.language;
    }

    get getRunTime(): number {
        return this.run_time;
    }

    get getYear(): number {
        return this.year;
    }

}