var h1InitialCount = 0;
var h1InitialCount2 = 0;
var pInitialCount= 0;
var h1Text = "Hey there! ";
var h1Text2 = "I'm Luis!"
var pText = "A Full Stack Developer";
var speed = 50;

var dataList = [{
  
}]


function typeWriter()  {
  if (h1InitialCount < h1Text.length) {
    document.getElementById("h1-typewriter").innerHTML += h1Text.charAt(h1InitialCount);
    h1InitialCount++;
    setTimeout(typeWriter, speed);
  }
  else if (h1InitialCount2 < h1Text2.length) {
    document.getElementById("h1-typewriter2").innerHTML += h1Text2.charAt(h1InitialCount2);
    h1InitialCount2++;
    setTimeout(typeWriter, speed);
  }
  else if (pInitialCount < pText.length) {
    document.getElementById("p-typewriter").innerHTML += pText.charAt(pInitialCount);
    pInitialCount++;
    setTimeout(typeWriter, speed);
  }
}

