status = "";

function preload(){
    img = loadImage("tv.jpeg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded(){
    console.log("Model has been loaded");
    status = true;
    object_Detector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}