class Counter {
    constructor(runEveryFiveTimes) {             // 생성자
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) {               // 메소드
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

function printSomnething(num) {
    console.log("yoi" + num);
}

const coolCounter = new Counter(printSomnething);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();