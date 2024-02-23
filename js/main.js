
const menuList = document.querySelector('.header__link-list');

const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mobile-menu');


const colorArray = ['#0066ff', '#e37218', '#e73d71'];

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


try {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
} catch (error) {
  console.log(error);
}


// portfolio slider

const slides = document.querySelectorAll('.portfolio__item');
const prev = document.querySelector('.portfolio__button-prev');
const next = document.querySelector('.portfolio__button-next');
const slidesWrapper = document.querySelector('.portfolio__slider-inner');
const slidesField = document.querySelector('.portfolio__list');
// const slidesField = document.querySelector('.portfolio__list');

let offset = 0;


// loader

const loader = document.querySelector('.loader');


function hideLoaderShowContent(content) {
  loader.style.display = 'none';
  content.style.display = '';
}

function checkIfPageExists() {
  const validRoutes = ['/index', '/index.html', '/my-page', '/my-page.html', '/page-portfolio', '/page-portfolio.html', '/page-resume', '/page-blog', '/page-blog.html', '/page-article', '/page-article.html', '/page-not-found.html'];
  const path = window.location.pathname;
  if (!validRoutes.includes(path)) {
    window.location.href = 'my-page/page-not-found.html';
  }
}

window.addEventListener('DOMContentLoaded', checkIfPageExists);