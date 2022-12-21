function setup() {
    canvas=createCanvas(640 , 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd ' , modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Object";
    
    function modelLoaded() {
        console.log("Model Loaded");
        objectDetector.detect(img , gotResult);
    }

    function gotResult(error , results)
    {
        if(error)
        {
            console.log(error);
        }

        console.log(results);
    }

}

img="";
status="";
function preload() {
    img=loadImage('brothers.jpg');

}

function draw() {
  
    image(img , 0 , 0 , 600 , 500);
    fill("#FF0000");
    text("Brothers" , 55 , 75);
    noFill();
    stroke("#FF0000")
    rect(30 , 60 , 450 , 500);
}