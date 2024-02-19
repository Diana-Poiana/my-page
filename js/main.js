
// main page
const aboutMeTitle = document.querySelector('.aboutme__title');
const aboutMeText = document.querySelector('.aboutme__description');
const aboutMePortrait = document.querySelector('.aboutme__image');

//blog page
const articleTexts = document.querySelectorAll('.blog__article-text');
const articleTitles = document.querySelectorAll('.blog_title');


const currentUrl = window.location.href;
console.log(currentUrl);
const parts = currentUrl.split("/");
console.log(parts);
const address = parts[parts.length - 1];
console.log(address);

async function fetchAllStories() {
  try {
    const response = await fetch('https://api.storyblok.com/v2/cdn/stories?version=draft&token=LeefeUkJwy0vrTrfJ8rhUAtt&cv=1708350835');
    const data = await response.json();
    console.log(data);
    const stories = data.stories;
    console.log(stories);
    populateHtml(stories);
    return stories;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// async function populateHtml() {
//   const story = await fetchAllStories();
//   console.log(story.stories);
//   // const { title, description, image } = story;
//   // console.log(title, description, image.filename);
//   // aboutMeTitle.textContent = title;
//   // aboutMeText.textContent = description;
//   // aboutMePortrait.src = image.filename;
// }

function populateHtml(content) {
  console.log(content);

  content.forEach((page) => {
    console.log(page);
  })
}

fetchAllStories();