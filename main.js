function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotposes);
}
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scorerightwrist=0;
scoreleftwrist=0;
Indecimalrightwristy=0;
function gotposes(results){
    if(results.length>0){
        console.log(0);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log(0);
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log(results);
        leftwristx= results[0].pose.leftWrist.x;
        leftwristy= results[0].pose.leftWrist.y;
        rightwristx= results[0].pose.rightWrist.x;
        rightwristy= results[0].pose.rightWrist.y;
        console.log("leftwristx= "+leftwristx+" leftwristy= "+leftwristy);
        console.log("rightwristx= "+rightwristx+" rightwristy= "+rightwristy);
    }
}
function modelloaded(){
    console.log('posenet is intialized');
}
function draw(){
    image(video,0,0,600, 500)
    if(scoreleftwrist > 0.2){
        circle(leftwristx,leftwristy,20);
         if(leftwristy>0 && leftwristy<= 500){
            document.getElementById("song").innerHTML = "Song= "+song;
            song.play();
            song.setVolume(1);
            song.rate(1);
        }
        
        }
        
        if(scorerightwrist > 0.2){
            circle(rightwristx,rightwristy,20);
            Indecimalrightwristy= Number(rightwristy);
            removedecimalright = floor(Indecimalrightwristy);
            volume= removedecimalright/500;
            document.getElementById("song").innerHTML= "Song= "+song2;
            song2.play();
            song2.setVolume(1);
            song2.rate(1);
            }
        
}
song="";
song2= "";

function preload(){
    song= loadSound("airplanept2.mp3");
    song2= loadSound("sjlt.mp3");
    
}
