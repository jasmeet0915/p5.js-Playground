var mic;
function setup() {
    createCanvas(200, 200);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    var volume = mic.getLevel();
    ellipse(100, 100, volume*200, volume*200);
    console.log(volume);
}