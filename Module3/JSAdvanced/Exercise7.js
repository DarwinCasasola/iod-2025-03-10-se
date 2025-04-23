class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

// a) PrecisionClock
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

// b) AlarmClock
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00") {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;

        const currentTime = `${hours}:${mins}`;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

        if (currentTime === this.wakeupTime) {
            console.log("Wake Up!");
            this.stop();
        }
    }
}

// 1. Standard clock
//const myClock = new DigitalClock("my clock:");
//myClock.start();

// 2. Precision clock (ticks every 2 seconds)
//const preciseClock = new PrecisionClock("precise clock:", 2000);
//preciseClock.start();

// 3. Alarm clock (adjust time below to current time to test)
const alarmClock = new AlarmClock("alarm clock:", "12:37");
alarmClock.start();
