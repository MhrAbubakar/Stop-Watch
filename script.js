let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

function start() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'block';
    timer = setInterval(updateTime, 10);
}
function pause() {
    if (!isPaused) {
        clearInterval(timer);
        document.getElementById('pauseBtn').textContent = 'Resume';
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('pauseBtn').textContent = 'Pause';
    }
    isPaused = !isPaused;
}
function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('pauseBtn').textContent = 'Pause';
    isPaused = false;
}
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0') + ':';
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0') + ':';
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0') + '.';
    document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');
}
