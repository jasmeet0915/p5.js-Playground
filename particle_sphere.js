//understand number of particle paradox
//add variation in radius with sound

var particle_size = [];
var total_particles = 15;
var radius = 200;
var particle_coords = [];
var mic;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    //background(0);
    
    mic = new p5.AudioIn();
    mic.start();
    for(var i = 0; i < total_particles; i++){
        particle_size.push(random(2, 11));
    }
}

function draw(){
    //push();
    //translate(windowWidth/2, windowHeight/2);
    orbitControl();
    background(0);
    //fill(255);
    var volume = mic.getLevel();
    radius = map(volume, 0, 1, 25, 75);
 for(var j = 0; j < total_particles; j++){
     var longitude = map(j, 0, total_particles, -PI, PI);
     for(var k = 0; k < 100; k++){
         var latitude = map(k, 0, total_particles, -HALF_PI, HALF_PI);
         var x = radius * sin(longitude) * cos(latitude);
         var y = radius * sin(longitude) * sin(latitude);
         var z = radius * cos(longitude);
         stroke(54, 134, 183);
         //strokeWeight();
         point(x, y, z);
     }
 }
    //pop();
}