export class Time {
    hours: number;
    minutes: number;
    seconds: number;
    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    getInSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
}