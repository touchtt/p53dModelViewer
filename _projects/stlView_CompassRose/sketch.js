let spinner;
let edgartownSpinner;
let edgartownText;

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
    edgartownSpinner = loadModel('edgartownOrigin.obj', true);
    edgartownText = loadModel('edgartownText.obj', true);
    applique = loadModel('lobsterApplique.obj', true);
    heart = loadModel('heart.obj', true);
    spinFrame = loadModel('spinFrame.stl', true);
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

    povSlider = createSlider(0.0, 2.0, 0.0, 0.1);

    povSlider.position(275, 225);

    frameXrot = createSlider(0.0, 360.0, 0.0, 1);

    frameXrot.position(275, 265);
}

function draw() {
    const povSliderValue = povSlider.value();
    povRate = povSliderValue;
    const frameXrotValue = frameXrot.value();
    lights();
    background(220);
    textFont(myFont);
    fill(0);
    text('Rotation Speed: ' + povSliderValue, -200, -160);
    text('Spinner Viewer v0.1 ', -350, 190);
    text('Frame X Pos: ' + frameXrotValue, -200, -120);
    text('Frames/Sec: ' + povSliderValue * 60, -870, 50)
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



    /*
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    Edgardtown Lighthouse
    */

    //Frame
    push();
    // rotateY(frameCount/16);
    rotateX(frameXrotValue);
    rotateZ(22);
    scale(-1.1, 1.1, 1.1);
    translate(0, 0, 0);
    //normalMaterial();
    ambientLight(60);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(silverTexture);
    shininess(20);
    noStroke();
    model(spinFrame);
    pop();

    //Edgartown Spinner
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    rotateX(20.5);
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
    model(edgartownSpinner);
    pop();


    //Edgartown Text
    push();
    //multuplying by negative 1 to rotate forward
    rotateX(frameCount * povRate * -1);
    // rotateY(frameCount/16);
    rotateX(90);
    rotateZ(22);
    scale(-.72, .75, .75);
    //x, z, y
    translate(0, 14, 4);
    //normalMaterial();
    ambientLight(60);
    pointLight(255, 255, 255, locX, locY, 255);
    // console.log(locX, locY);
    // specularMaterial(255);
    texture(blackTexture);
    shininess(20);
    noStroke();
    model(edgartownText);
    pop();



    /* 
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    LOBSTER SPINNER
    */

    // //spinner
    // push();
    // //multuplying by negative 1 to rotate forward
    // rotateX(frameCount * povRate * -1);
    // // rotateY(frameCount/16);
    // rotateX(90);
    // rotateZ(22);
    // scale(-3, 1, 3);
    // translate(0, -15, 0);
    // //normalMaterial();
    // ambientLight(60);
    // pointLight(255, 255, 255, locX, locY, 255);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(silverTexture);
    // shininess(20);
    // noStroke();
    // model(spinner);
    // pop();

    // //applique
    // push();
    // rotateX(frameCount * povRate * -1);
    // // rotateY(frameCount/16);
    // rotateX(90);
    // rotateZ(22);
    // translate(0,0,20);
    // scale(-.8, 1.2, .8);
    // //normalMaterial();
    // ambientLight(255);
    // pointLight(255, 255, 255, locX, locY, 150);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(goldTexture);
    // shininess(20);
    // noStroke();
    // model(applique);
    // pop();

    // //heart
    // push();
    // rotateX(frameCount * povRate * -1);
    // //rotateY(22);
    // rotateX(200);
    // rotateZ(22);
    // scale(-2, -0.5, 2);
    // translate(0, -46, 15);
    // //normalMaterial();
    // ambientLight(255);
    // pointLight(255, 255, 255, locX, locY, 50);
    // // console.log(locX, locY);
    // // specularMaterial(255);
    // texture(blackTexture);
    // shininess(20);
    // noStroke();
    // model(heart);
    // pop();
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