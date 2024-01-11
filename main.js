status="";
answer = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
  }

  function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Deteting Objects";
    answer = document.getElementById("input").value;
  }

  function modelLoaded(){
    console.log("Model Loaded");
    status = true ;
  }

  function draw(){
    image(video,0,0,480,380);
  }
