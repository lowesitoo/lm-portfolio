  var pInitialCount= 0;
var pText = "Full Stack Developer";
var speed = 50;

var skillSetList = [{
    skill : "HTML5",
    image : "html-5.png"
},
{
    skill : "CSS3",
    image : "CSS3.png"
}
]

function typeWriter()  {
  if (pInitialCount < pText.length) {
    document.getElementById("p-typewriter").innerHTML += pText.charAt(pInitialCount);
    pInitialCount++;
    setTimeout(typeWriter, speed);
  }
}

