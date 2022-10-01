var pInitialCount= 0;
var pText = "Full Stack Developer";
var speed = 50;
var sectionList = ['s1','s2','s3','s4']
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
function randomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
  }
  return color;
  
    // return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function changeColor() {
  for (let i = 0; i < sectionList.length; i++) {
    let currentSection = document.getElementById(sectionList[i]);
    currentSection.style.backgroundColor = randomColor();
  }
}
// Scroll effect
const TIME_OUT = 600 // It should be the same transition time of the sections
      const body = document.querySelector('body')
      const sectionsQty = document.querySelectorAll('section').length
      const sectionStick = document.querySelector('.section-stick')

      let startFlag = true
      let initialScroll = window.scrollY
      let qty = 1,
        main = null,
        next = null

      // Add child elements in .section-stick as number of sections exist
      Array(sectionsQty)
        .fill()
        .forEach(() => {
          sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick"></div>'
        })

      console.log('SLIDE', qty)

      // Listening to scroll event
      window.onscroll = () => {
        if (startFlag) {
          const scrollDown = this.scrollY >= initialScroll
          const scrollLimit = qty >= 1 && qty <= sectionsQty

          // Verify that the scroll does not exceed the number of sections
          if (scrollLimit) {
            body.style.overflowY = 'hidden' // Lock el scroll

            if (scrollDown && qty < sectionsQty) {
              main = document.querySelector(`section.s${qty}`)
              next = document.querySelector(`section.s${qty + 1}`)

              main.style.transform = 'translateY(-100vh)'
              next.style.transform = 'translateY(0)'

              qty++
            } else if (!scrollDown && qty > 1) {
              main = document.querySelector(`section.s${qty - 1}`)
              next = document.querySelector(`section.s${qty}`)

              main.style.transform = 'translateY(0)'
              next.style.transform = 'translateY(100vh)'

              qty--
            }

            // Scroll progressbar
            const active = document.querySelector('.section-stick .stick.active')
            active.style.top = (62 + 30) * (qty - 1) + 'px'
          }

          console.log('SLIDE', qty)

          // Wait for the scrolling to finish to reset the values
          setTimeout(() => {
            initialScroll = this.scrollY
            startFlag = true
            body.style.overflowY = 'scroll' // Unlock scroll
          }, TIME_OUT)

          startFlag = false
        }

        // Keep scrollbar in the middle of the viewport
        window.scroll(0, window.screen.height)
      }