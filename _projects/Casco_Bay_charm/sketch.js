let frameWithJumpring;
let cascoBay;
let gem;

let canvas;
let spinFrame;
let silverTexture;
let filePath;
let x;
let povRate;
let povSlider;
let frameXrot;

let saphBlue;
let cascoBayText;

function preload() {
    cascoBay = loadModel('cascoBay.obj', true);
    cascoBayText = loadModel('cascoBayText.obj', true);
    spinFrame = loadModel('spinFrame.stl', true);
    frameWithJumpring = loadModel('frameWithJumpring_resize.obj', true);
    gem = loadModel('gem.obj', true);
    saphBlue = loadImage('oceanBlueTexture.png');
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
    povSlider.position(275, 225);
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
    text('Rotation Speed: ' + povSliderValue, -200, -160);
    text('Spinner Viewer v0.1 ', -350, 190);
    // text('Frame X Pos: ' + frameXrotValue, -200, -120);
    text('Frames/Sec: ' + povSliderValue * 60, -870, 50);
    let locX = mouseX - width / 16;
    let locY = mouseY - height / 16;

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



    /*
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    */

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

    // //Frame with jumpring
    push();
    // rotateY(frameCount/16);
    rotateX(11);
    // rotateX(frameXrotValue);
    rotateZ(0);
    scale(-1.3, 1.3, 1.3);
    translate(0, 0, -17);
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

        //Frame with bale
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
    
    //Casco Bay Spinner
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    rotateX(0);
    rotateZ(22);
    scale(-1, 1, 1);
    translate(0, 0, 0);
    //normalMaterial();
    ambientLight(20);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(silverTexture);
    shininess(20);
    noStroke();
    model(cascoBay);
    pop();

    //casco Bay Text 
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    //rotateX(20.5);
    rotateZ(22);
    scale(-.6, .5, .5);
    //(leftRight,depth,updown)
    translate(0, 10, 140);
    //normalMaterial();
    ambientLight(20);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(blackTexture);
    shininess(255);
    noStroke();
    model(cascoBayText);
    pop();
    
    //gem 
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    //rotateX(20.5);
    rotateZ(22);
    scale(.05);
    //(leftRight,depth,updown)
    translate(-400, 100, -950);
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