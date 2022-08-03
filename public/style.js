const hamNav = document.querySelector('#nav-bar-hamburger')
const hamNavlinks = document.querySelector('#nav-bar-hamburger-links')
const section = document.querySelector('#section')
const portfolioLinks = document.querySelectorAll('#portfolio-link-txt')
const contactUs = document.querySelector('.contact-us-subtitle')

var isOpen = false

hamNav.addEventListener('click', () => {
    if(!isOpen) {
        hamNavlinks.classList.add('on')
        isOpen = true
    } else {
        hamNavlinks.classList.remove('on')
        isOpen = false
    }
})

let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.35;
  
  section.style.transform = "skewY(" + speed + "deg)"
  

  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

looper();


section.addEventListener('mouseover', (e) => {
        if (e.target && e.target.id === 'portfolio-link-txt') {
            var arr = e.target.classList

            for (i=0; i<portfolioLinks.length; i++) {
                const value = portfolioLinks[i].classList
                if (value[1] != arr[1]) {
                    portfolioLinks[i].style.opacity = '0.4'
                }
            }
        }
})

section.addEventListener('mouseout', (e) => {

    for (i=0; i<portfolioLinks.length; i++) {
        portfolioLinks[i].style.opacity = '1'
        portfolioLinks[i].style.transition = ' all 0.4s ease-out'
    }
})

contactUs.addEventListener('mouseout', () => {
    contactUs.classList.add('off')
})

contactUs.addEventListener('mouseover', () => {
    contactUs.classList.remove('off')
})