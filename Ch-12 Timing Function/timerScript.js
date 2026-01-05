
let second = 0;
let minutes = 0;

let stopWatchInterval = null;

let stopWatch = document.getElementById('stopWatch');

document.getElementById('start').addEventListener('click', () => {

    if (stopWatchInterval != null) {
        return;
    }

    stopWatchInterval = setInterval(() => {
        second++;

        if (second === 60) {
            minutes++;
            second = 0;
        }


        let mm = minutes < 10 ? "0" + minutes : minutes;
        let ss = second < 10 ? "0" + second : second;

        stopWatch.textContent = `${mm}:${ss}`;
    }, 50);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(stopWatchInterval);
    stopWatch.textContent = "00:00";
    second = 0;
    minutes = 0;
    stopWatchInterval = null;
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(stopWatchInterval);
    stopWatchInterval = null;
});

let otpTimer = document.getElementById('otp');

let otpSecond = 59;
let otpMinute = 1;
let otpInterval;

otpInterval = setInterval(() => {
    if (otpMinute === 0 && otpSecond === 0) {
        otpTimer.textContent = "Resend OTP";
        clearInterval(otpInterval);
        otpInterval = null;
        return;
    }

    if (otpSecond === 0) {
        otpMinute--;
        otpSecond = 59;
    } else {
        otpSecond--;
    }

    let mm = otpMinute < 10 ? "0" + otpMinute : otpMinute;
    let ss = otpSecond < 10 ? "0" + otpSecond : otpSecond;

    otpTimer.textContent = `${mm} : ${ss}`;
}, 100);

otpTimer.addEventListener('click', () => {

    if (otpInterval != null) {
        return;
    }

    otpSecond = 59;
    otpMinute = 1;
    otpInterval = setInterval(() => {
        if (otpMinute === 0 && otpSecond === 0) {
            otpTimer.textContent = "Resend OTP";
            clearInterval(otpInterval);
            return;
        }

        if (otpSecond === 0) {
            otpMinute--;
            otpSecond = 59;
        } else {
            otpSecond--;
        }

        let mm = otpMinute < 10 ? "0" + otpMinute : otpMinute;
        let ss = otpSecond < 10 ? "0" + otpSecond : otpSecond;

        otpTimer.textContent = `${mm} : ${ss}`;
    }, 100);
});