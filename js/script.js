const navbarCollapse = document.querySelector('.navbar-collapse');
const body = document.querySelector('body');

// Navbar responsive
const mobileMenu = () => {
    const show = document.querySelector('.show');
    if(show) {
        navbarCollapse.classList.toggle('show');
    }
}

body.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.border-bottom');
    const home = document.querySelector('#homePage');
    const services = document.querySelector('#servicesPage');
    const testimonies = document.querySelector('#testimoniesPage');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 768 && scrollPos < 410) {
      home.classList.add('border-bottom');
      services.classList.remove('border-bottom');
      return;
    } else if (window.innerWidth > 768 && scrollPos < 2100) {
      services.classList.add('border-bottom');
      home.classList.remove('border-bottom');
      testimonies.classList.remove('border-bottom');
      return;
    } else if (window.innerWidth > 768 && scrollPos < 2580) {
      testimonies.classList.add('border-bottom');
      services.classList.remove('border-bottom');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('border-bottom');
    }
  };

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);