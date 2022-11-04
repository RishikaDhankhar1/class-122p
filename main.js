x=0;
y=0;
drawapple="";
apple="";
speak_data="";
to_number=0;
screen_width=0;
screen_height=0;
function preload(){
    apple=loadImage("apple.jpeg");
}
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="The system is listening pls speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speach has been recognised as:"+content;
    to_number=Number(content);
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML="Started drawing apple";
        drawapple="set";
    }

    else
    {
        document.getElementById("status").innerHTML="The speech has not recognized as a number";

    }
}

function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width, screen_height-150);
    canvas.position(0,150);
}

function draw(){
    if(drawapple=="set")
    {
        for(var i=1; i<=to_number;i++)
        {
            x=Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
        }
        document.getElementById("status").innerHTML="apple is drawn";
        drawapple="";
        speak_data=to_number+"applesdrawn";
        speak();
    }
    
}
function speak()
    { var synth = window.speechSynthesis;
         var utterThis = new SpeechSynthesisUtterance(speak_data);
          synth.speak(utterThis); speak_data = ""; }
    