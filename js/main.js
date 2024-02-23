
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


// async function fetchDataq() {
//   try {
//     const response = await fetch(`https://api.storyblok.com/v2/cdn/datasource_entries?datasource=github-link&token=eejSoJjNQ134aC6UJ2x3xgtt`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchDataq();











// async function fetchAllStories() {
//   try {
//     const response = await fetch('https://api.storyblok.com/v2/cdn/stories?version=draft&token=LeefeUkJwy0vrTrfJ8rhUAtt&cv=1708350835');
//     const data = await response.json();
//     console.log(data);
//     const stories = data.stories;
//     console.log(stories);
//     populateHtml(stories);
//     return stories;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// async function populateHtml() {
//   const story = await fetchAllStories();
//   console.log(story.stories);
//   // const { title, description, image } = story;
//   // console.log(title, description, image.filename);
//   // aboutMeTitle.textContent = title;
//   // aboutMeText.textContent = description;
//   // aboutMePortrait.src = image.filename;
// }

// function populateHtml(content) {
//   console.log(content);

//   content.forEach((page) => {
//     console.log(page);
//   })
// }

// fetchAllStories();

// function checkIfPageExists() {
//   const validRoutes = ['/index', '/my-portfolio', '/page-contacts', '/page-portfolio', '/page-resume', '/page-blog', '/page-article'];
//   const path = window.location.pathname;
//   if (!validRoutes.includes(path)) {
//     window.location.href = '/404';
//   }
// }

// window.addEventListener('DOMContentLoaded', checkIfPageExists);