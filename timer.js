class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.intervalId = null;
        this.selector = selector;
        this.targetDate = targetDate;
    }

    getRefs() {
        const container = document.querySelector(this.selector);
        const daysRef = container.querySelector('[data-value="days"]');
        const hoursRef = container.querySelector('[data-value="hours"]');
        const minsRef = container.querySelector('[data-value="mins"]');
        const secsRef = container.querySelector('[data-value="secs"]');
        return { daysRef, hoursRef, minsRef, secsRef };
    }

    updateTimer({ daysRef, hoursRef, minsRef, secsRef }) {
        const time = this.targetDate - Date.now();
        if (time > 1000) {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            daysRef.textContent = days.toString().padStart(2, '0');
            hoursRef.textContent = hours.toString().padStart(2, '0');
            minsRef.textContent = mins.toString().padStart(2, '0');
            secsRef.textContent = secs.toString().padStart(2, '0');
            return
        };
        this.stopTimer();
    }
        
    startTimer() {
        this.intervalId = setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalId);
    }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 02, 2021'),
});

timer.startTimer();



