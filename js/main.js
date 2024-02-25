// menu
const menuList = document.querySelector('.header__link-list');
const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mobile-menu');
// slider
const slides = document.querySelectorAll('.portfolio__item');
const prev = document.querySelector('.portfolio__button-prev');
const next = document.querySelector('.portfolio__button-next');
const slidesWrapper = document.querySelector('.portfolio__slider-inner');
const slidesField = document.querySelector('.portfolio__list');
// other
const loader = document.querySelector('.loader');
const colorArray = ['#0066ff', '#e37218', '#e73d71'];
let offset = 0;

function handleHover(event, isHovering) {
  if (event.target.tagName === 'A') {
    if (isHovering) {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      const randomColor = colorArray[randomIndex];
      event.target.style.color = randomColor;
    } else {
      event.target.style.color = '#000000';
    }
  }
}

// menu
try {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
} catch (error) {
  console.log(error);
}

// loader
function hideLoaderShowContent(content) {
  loader.style.display = 'none';
  content.style.display = '';
}

// const validRoutes = ['index', 'my-page', 'page-portfolio', 'page-resume', 'page-blog', 'page-article', 'page-contacts', 'page-not-found.html'];

// function checkIfPageExists() {
//   const path = window.location.pathname.replace(/^\//, '');

//   if (path !== '') {
//     if (!validRoutes.includes(path)) {
//       if (path !== 'page-not-found.html') {
//         window.location.href = '/page-not-found.html';
//       }
//     }
//   }
// }

window.addEventListener('DOMContentLoaded', checkIfPageExists);
