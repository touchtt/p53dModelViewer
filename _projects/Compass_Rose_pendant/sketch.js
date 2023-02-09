let spinner;
let edgartownSpinner;
let edgartownText;
let frameWithJumpring;
let gem;

let canvas;

let applique;
let circle;
let spinFrame;
let goldTexture;
let silverTexture;
let blackTexture;
let filePath;
let x;
let povRate;
let povSlider;
let frameXrot;

function preload() {
    spinner = loadModel('compassRoseDisc.obj', true);
    applique = loadModel('compassRoseStar.stl', true);
    circle = loadModel('compassRoseCircle.obj', true);
    frameWithJumpring = loadModel('frameWithBale.obj', true);
    gem = loadModel('2point5gem.obj', true);
    goldTexture = loadImage('brightYellow.jpeg');
    silverTexture = loadImage('silverTexture.jpeg');
    blackTexture = loadImage('blackTexture.jpeg');
    saphBlue = loadImage('oceanBlueTexture.png');
    myFont = loadFont('mp-bold.otf');
}

function setup() {
    canvas = createCanvas(710, 400, WEBGL);
    //creates screen readable description for the sketch/canvas. 
    describe('3D Spinner.');
    canvas.parent('simple-sketch-holder'); // this ensures that the sketch will be positioned properly
    //input = createFileInput(handleFile);
    //input.position(0, 0);
    textFont(myFont);
    textSize(15);
    povRate = 0.2;
    povSlider = createSlider(0.0, 1.6, 0.0, 0.1);
    povSlider.position(760, 175);
    // frameXrot = createSlider(0.0, 360.0, 0.0, 1);
    // frameXrot.position(475, 265);
}

function draw() {
    const povSliderValue = povSlider.value();
    povRate = povSliderValue;
    // const frameXrotValue = frameXrot.value();
    lights();
    background(255);
    textFont(myFont);
    fill(0);
    // text('Rotation Speed: ' + povSliderValue, -200, -160);
    // text('Spinner Viewer v0.1 ', -350, 190);
    // text('Frame X Pos: ' + frameXrotValue, -200, -120);
    // text('Frames/Sec: ' + povSliderValue * 60, -870, 50)
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    // //Frame
    // push();
    // // rotateY(frameCount/16);
    // rotateX(frameXrotValue);
    // rotateZ(22);
    // scale(-3.5, 3.5, 3.5);
    // translate(0, -2, 0);
    // //normalMaterial();
    // ambientLight(60);
    // pointLight(255, 255, 255, locX, locY, 255);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(silverTexture);
    // shininess(20);
    // noStroke();
    // model(spinFrame);
    // pop();

    // //Frame, no jumpring or bail
    // push();
    // // rotateY(frameCount/16);
    // rotateX(frameXrotValue);
    // rotateZ(22);
    // scale(-1.1, 1.1, 1.1);
    // translate(0, 0, 0);
    // //normalMaterial();
    // ambientLight(60);
    // pointLight(255, 255, 255, locX, locY, 255);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(silverTexture);
    // shininess(20);
    // noStroke();
    // model(spinFrame);
    // pop();

    //Frame with jumpring
    push();
    // rotateY(frameCount/16);
    rotateX(11);
    // rotateX(frameXrotValue);
    rotateZ(22);
    scale(1.4, 1.4, 1.4);
    translate(0, 0, -20);
    //normalMaterial();
    ambientLight(255);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(silverTexture);
    shininess(20);
    noStroke();
    model(frameWithJumpring);
    pop();

    /* 
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    */

    //spinner
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    rotateX(90);
    rotateZ(22);
    scale(-1, 1, 1);
    translate(0, 0, 0);
    //normalMaterial();
    ambientLight(60);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(silverTexture);
    shininess(20);
    noStroke();
    model(spinner);
    pop();

    //applique
    push();
    rotateX((35) + frameCount * povRate * -1);
    // rotateY(frameCount/16);
    // rotateX(0);
    rotateZ(22);
    translate(0, 0, -20);
    scale(-.7, .7, .7);
    //normalMaterial();
    ambientLight(255);
    pointLight(255, 255, 255, locX, locY, 150);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(goldTexture);
    shininess(20);
    noStroke();
    model(applique);
    pop();

    //circle
    push();
    rotateX(90);
    rotateX(frameCount * povRate * -1);
    rotateY(3.1);
    rotateZ(22);
    scale(.7, .7, .7);
    translate(0, 10, 0);
    //normalMaterial();
    ambientLight(50);
    pointLight(255, 255, 255, locX, locY, 50);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(blackTexture);
    shininess(20);
    noStroke();
    model(circle);
    pop();

    //gem 
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    rotateX(90);
    // rotateY(frameCount/16);
    //rotateX(20.5);
    rotateZ(22);
    scale(.15);
    //(leftRight,depth,updown)
    translate(0, 0, 0);
    //normalMaterial();
    ambientLight(255);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(saphBlue);
    shininess(100);
    noStroke();
    model(gem);
    pop();
}

// function handleFile(file) {
//     console.log(file);
//     let filePath = document.getElementById('stlFileInput');
//     spinner = loadModel(filepath, true);

// }


function changeFile(stlFilePath) {
    const elem = document.getElementById('stlFilePath');
    elem = filePath;
    spinner = loadModel(filePath, true);
}