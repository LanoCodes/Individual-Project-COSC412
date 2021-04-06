'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'YOUR KEY HERE';
// NOTE: YOUR KEY HERE... this is just for me to quickly copy before posting to GitHub without my own apiKey

const searchRequest = {
  // NOTE: lat and long not needed! Only needed if location: 'xyz', is not provided
  term: 'restaurants',
  latitude: '39.098487854003906',
  longitude: '-76.81920623779297'
};

const client = yelp.client(apiKey);

// random integer generator, between 0(included) and 1000(not included)
// previously var rando =  Math.floor(Math.random() * (1000 - 0)) + 0;
// 21 is used instead of n - 1 for the max!
var rando =  Math.floor(Math.random() * (21 - 0)) + 0;
// NOTE: generator works! Now, to pop into business request
//  While the generatos is logically sound, a undefined occurs when display results of a call using the generated number.... this may be because the number generated exists outside of the number of restaurants thrown back.
//  To mitigate the risk of failure, I am going to limit the range from 0 - 1000, to 0 - 20. That should cover a good amount of restaurants thrown back while giving the user a good enough randomization!
console.log(rando);


client.search(searchRequest).then(response => {

  // NOTE: Below where  it says .jsonBody.businesses[0], that zero is indicating the first result in a list of results that aregiven from the after the request has been made

  // To make it more "roulette-y," I should make a random number, within the acceptable range, put it in a variable, and then place that variable in place of that zero in brackets.

  // NOTE: Fusion docs says that it returns up to a 1000 business based on the search criteria. So, assuming that the criteria given allows for a full response with 1000 restaurants to choose from, the bounds for a random integer creater is from 0 - 999
  const firstResult = response.jsonBody.businesses[rando];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

// NOTE: after grabbing a business, you might want to use location data to get users there?? the endpoint that seems to handle that is businesses[x].location, where x is our random number (?)


// NOTE: **Thoughts**: Below is how project may be functional on a site of my choosing
// Build in bootstrap a theme of my choosing, then add code similar to this to dispaky API calls to a div or some other html document
// cite: w3schools
// <!DOCTYPE html>
// <html>
// <body>
//
// <h2>JavaScript Math.random()</h2>
//
// <p>Every time you click the button, getRndInteger(min, max) returns a random number between 0
// and 9 (both included):</p>
//
// <button onclick="document.getElementById('demo').innerHTML = getRndInteger(0,1000)">Click Me</button>
//
// <p id="demo"></p>
//
// <script>
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// </script>
//
// </body>
// </html>
