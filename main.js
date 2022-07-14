function setup(){
    video= createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(500, 500);
    canvas.position(560,150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Success");
}

function draw(){
    background('orange');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}