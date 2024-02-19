
// main page
const aboutMeTitle = document.querySelector('.aboutme__title');
const aboutMeText = document.querySelector('.aboutme__description');
const aboutMePortrait = document.querySelector('.aboutme__image');

//blog page
const articleTexts = document.querySelectorAll('.blog__article-text');
const articleTitles = document.querySelectorAll('.blog_title');

async function fetchData() {
  try {
    const response = await fetch('https://api.storyblok.com/v2/cdn/stories/my-portfolio?version=draft&token=LeefeUkJwy0vrTrfJ8rhUAtt&cv=1708350835');
    const data = await response.json();
    console.log(data);
    const story = data.story.content;
    console.log(story);
    return story;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function populateHtml() {
  const story = await fetchData();
  const { title, description, image } = story;
  console.log(title, description, image.filename);
  aboutMeTitle.textContent = title;
  aboutMeText.textContent = description;
  aboutMePortrait.src = image.filename;
}

populateHtml();

