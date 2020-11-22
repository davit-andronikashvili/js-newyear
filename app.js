const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secE1 = document.getElementById('sec');

const newYears = "1 jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecounds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecounds / 3600 / 24);
    const hours = Math.floor(totalSecounds / 3600) %24;
    const mins = Math.floor(totalSecounds / 60) %60;
    const sec = Math.floor(totalSecounds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secE1.innerHTML = sec;
}

countdown();


setInterval(countdown, 1000);