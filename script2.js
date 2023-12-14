
var options = {
    strings: ["Web Designer", "Web Developer.", ],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
};

var typed = new Typed(".text", options);

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})