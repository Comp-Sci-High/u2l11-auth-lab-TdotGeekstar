// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below

const link = "https://api.giphy.com/v1/gifs/search"
const apiKey = "JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below

const endpoint = "q=raccoonlimit=1"

// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below

const query = `?api_key=${apiKey}&${endpoint}`

// Task 4: Making the API call
// Define the function to fetch the data and console log the url key

async function getRaccoonGif() {
  const link = "https://api.giphy.com/v1/gifs/search";
  const apiKey = "JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94";
  const query = `?api_key=${apiKey}&q=raccoon&limit=1`;
  const url = link + query;

  const response = await fetch(url);
  const data = await response.json();
  
  console.log("GIF URL:", data.url);
}


// Call the function to test it worked

getRaccoonGif()

// Task 5: Running it back
// Find the endpoint that returns a random sticker
// Build the request URL for a coding sticker


// Define and call the function that prints just the sticker URL




