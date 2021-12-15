const END_DATE = new Date('01/9/2022');
const START_DATE = new Date('12/14/2021');

function setup() {
    createCanvas(windowWidth, windowHeight);
}


// helper function for grammar
function condPlural(val) {
    if (typeof val !== 'number') return '';
    return val == 1 ? '' : 's';
}

function draw() {
    const thisMoment = new Date();

    background(0);

    translate(width / 2, height / 2);
    noStroke();
    textSize(40);
    fill(255);

    const diffTime = END_DATE - thisMoment;

    const dSec = diffTime / 1000;
    const dMin = dSec / 60;
    const dHrs = dMin / 60;

    textAlign(CENTER, CENTER);

    const days = Math.floor(Math.floor(dHrs) / 24);
    const hours = Math.floor(Math.floor(dHrs) % 24);
    const minutes = Math.floor(Math.floor(dMin) % 60);
    const seconds = Math.floor(Math.floor(dSec) % 60);

    text(
        `There ${days == 1 ? "is" : "are"}:\n\n${days} day${condPlural(days)}\n${hours} hour${condPlural(hours)}\n${minutes} minute${condPlural(minutes)}\nand\n${seconds} second${condPlural(seconds)}\n\nleft of break\n\n it is ${nf(
            100 - (diffTime * 100) / (END_DATE - START_DATE),
            2,
            2
        )}% over`,
        0,
        0
    );
}
