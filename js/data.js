var initialCount = 0;
var speed = 300;
var typeSpeed = 200;
var pText = 'Full Stack Developer | ILO';
var sectionList = ['s1', 's2', 's3', 's4'];
var skillSetList = [
    {
        skill: 'HTML5',
        image: 'images/html-5.png',
    },
    {
        skill: 'CSS3',
        image: 'images/CSS3.png',
    },
];
function typeWriter() {
    if (initialCount < pText.length) {
        document.getElementById('p-typewriter').innerHTML +=
            pText.charAt(initialCount);
        initialCount++;
        setTimeout(typeWriter, typeSpeed);
    }
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
//
const TIME_OUT = 600; // It should be the same transition time of the sections
const body = document.querySelector('body');
const sectionsQty = document.querySelectorAll('section').length;
const sectionStick = document.querySelector('.section-stick');

let startFlag = true;
let initialScroll = window.scrollY;
let qty = 1,
    main = null,
    next = null;

// Add child elements in .section-stick as number of sections exist
Array(sectionsQty)
    .fill()
    .forEach(() => {
        sectionStick.innerHTML =
            sectionStick.innerHTML + '<div class="stick"></div>';
    });
// Listening to scroll event
window.onscroll = () => {
    if (startFlag) {
        const scrollDown = this.scrollY >= initialScroll;
        const scrollLimit = qty >= 1 && qty <= sectionsQty;

        // Verify that the scroll does not exceed the number of sections
        if (scrollLimit) {
            body.style.overflowY = 'hidden'; // Lock el scroll

            if (scrollDown && qty < sectionsQty) {
                main = document.querySelector(`section.s${qty}`);
                next = document.querySelector(`section.s${qty + 1}`);

                main.style.transform = 'translateY(-100vh)';
                next.style.transform = 'translateY(0)';

                qty++;
            } else if (!scrollDown && qty > 1) {
                main = document.querySelector(`section.s${qty - 1}`);
                next = document.querySelector(`section.s${qty}`);

                main.style.transform = 'translateY(0)';
                next.style.transform = 'translateY(100vh)';

                qty--;
            }
            // Scroll progressbar
            const active = document.querySelector(
                '.section-stick .stick.active'
            );
            active.style.top = (62 + 30) * (qty - 1) + 'px';
        }
        // Wait for the scrolling to finish to reset the values
        setTimeout(() => {
            initialScroll = this.scrollY;
            startFlag = true;
            body.style.overflowY = 'scroll'; // Unlock scroll
        }, TIME_OUT);
        startFlag = false;
    }
    // Keep scrollbar in the middle of the viewport
    window.scroll(0, window.screen.height);
};

// Footer
function yearNow() {
    return new Date().toLocaleString('en-us', { year: 'numeric' });
}
document.getElementById('footer-copy').innerHTML =
    'Antonio Luis Martinez © ' + yearNow() + ' | ' + 'All rights reserved';
