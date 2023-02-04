// Variables
var initialCount = 0;
var speed = 1000;
var typeSpeed = 150;
var introText = 'Full Stack Developer | ILO';

function typeWriter() {
    if (initialCount < introText.length) {
        document.getElementById('p-typewriter').innerHTML +=
            introText.charAt(initialCount);
        initialCount++;
        setTimeout(typeWriter, typeSpeed);
    }
}

function onOverlay() {
    document.getElementById('overlay').style.display = 'block';
}

function offOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
// Blinking Cursor
var cursor = true;
setInterval(() => {
    if (cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);

// Footer
function yearNow() {
    return new Date().toLocaleString('en-us', { year: 'numeric' });
}
document.getElementById('footer-copy').innerHTML =
    'Antonio Luis Martinez © ' + yearNow() + ' | ' + 'All rights reserved';
