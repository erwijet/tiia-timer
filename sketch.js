const END_OF_SEMESTER = new Date('12/6/2021');

function setup() {
    createCanvas(windowWidth, windowHeight);
    // frameRate(1);
}

function draw() {
    const thisMoment = new Date();

    background(0);

    translate(width / 2, height / 2);
    noStroke();
    textSize(40);
    fill(255);

    const diffTime = END_OF_SEMESTER - thisMoment;

    const dSec = diffTime / 1000;
    const dMin = dSec / 60;
    const dHrs = dMin / 60;

    textAlign(CENTER, CENTER);

    const days = Math.floor(Math.floor(dHrs) / 24);
    const hours = Math.floor(Math.floor(dHrs) % 24);
    const minutes = Math.floor(Math.floor(dMin) % 60);
    const seconds = Math.floor(Math.floor(dSec) % 60);

    text(
        `There Are:\n\n${days} days\n${hours} hours\n${minutes} minutes\nand\n${seconds} seconds\nleft in\nthe semester\n\nwe are ${nf(
            100 - (diffTime * 100) / (END_OF_SEMESTER - new Date('8/15/2021')),
            2,
            2
        )}% done`,
        0,
        0
    );
}
