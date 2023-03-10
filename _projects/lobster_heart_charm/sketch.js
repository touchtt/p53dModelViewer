let spinner;
let edgartownSpinner;
let edgartownText;
let frameWithJumpring;

let canvas;

let applique;
let heart;
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
    spinner = loadModel('heartDisk.obj', true);
    applique = loadModel('lobsterApplique.obj', true);
    heart = loadModel('heart.obj', true);
    frameWithJumpring = loadModel('frameWithJumpring_resize.obj', true);
    goldTexture = loadImage('brightYellow.jpeg');
    silverTexture = loadImage('silverTexture.jpeg');
    blackTexture = loadImage('blackTexture.jpeg');
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
    povSlider.position(760, 225);
    // frameXrot = createSlider(0.0, 360.0, 0.0, 1);
    // frameXrot.position(475, 265);
}

function draw() {
    const povSliderValue = povSlider.value();
    var x = map(mouseX, 0, width, -200, 200);
    var y = map(mouseY, 0, height, -200, 200);
    camera(0, 0, 700, 0, 0, 0, 0, 1, 0);
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
    let locX = mouseX - width / 8;
    let locY = mouseY - height / 8;

    // //Frame with bale
    // push();
    // // rotateY(frameCount/16);
    // rotateX(11);
    // // rotateX(frameXrotValue);
    // rotateZ(0);
    // scale(-1.4, 1.4, 1.4);
    // translate(0, 0, -20);
    // //normalMaterial();
    // ambientLight(255);
    // pointLight(255, 255, 255, locX, locY, 255);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(silverTexture);
    // shininess(20);
    // noStroke();
    // model(frameWithJumpring);
    // pop();

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
    rotateZ(0);
    scale(1.3, 1.3, 1.3);
    translate(0, 0, -15);
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
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    rotateX(90);
    rotateZ(22);
    translate(0, 10, 0);
    scale(-.5, .5, .5);
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

    //heart
    push();
    rotateX(90);
    rotateX(frameCount * povRate * -1);
    rotateY(3.1);
    rotateZ(22);
    scale(.7, .1, .7);
    translate(0, -100, 10);
    //normalMaterial();
    ambientLight(50);
    pointLight(255, 255, 255, locX, locY, 50);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(blackTexture);
    shininess(20);
    noStroke();
    model(heart);
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