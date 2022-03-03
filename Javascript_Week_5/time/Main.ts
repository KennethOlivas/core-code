import {Time} from "./Time";

export class Main {
    start() {
        let time = new Time(10, 45, 1);
        console.log(`Time in seconds: ${time.getInSeconds()}`);
    }
}