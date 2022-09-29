var h1InitialCount = 0;
var  pInitialCount= 0;
var h1Text = "Hey there! I'm Luis!";
var pText = "A Full Stack Developer";
var speed = 50;



function typeWriter()  {
  if (h1InitialCount < h1Text.length) {
    document.getElementById("h1-typewriter").innerHTML += h1Text.charAt(h1InitialCount);
    h1InitialCount++;
    setTimeout(typeWriter, speed);
  }
  else if (pInitialCount < pText.length) {
    document.getElementById("p-typewriter").innerHTML += pText.charAt(pInitialCount);
    pInitialCount++;
    setTimeout(typeWriter, speed);
  }
  else if (h1InitialCount == h1Text.length || pInitialCount == pText.length) {
    document.getElementById("h1-typewriter").innerHTML
  }
}
