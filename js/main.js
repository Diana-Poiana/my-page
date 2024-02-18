import { storyblokInit } from '/node_modules/@storyblok/js';

// Initialize Storyblok client with your access token
const { storyblokApi } = storyblokInit({
  accessToken: 'LeefeUkJwy0vrTrfJ8rhUAtt'
});

// Fetch stories from your space
storyblokApi.get('cdn/stories')
  .then(response => {
    console.log('Fetched stories:', response.data.stories);
  })
  .catch(error => {
    console.error('Error fetching stories:', error);
  });