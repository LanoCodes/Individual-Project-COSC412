'use strict';

const yelp = require('yelp-fusion');

// NOTE: You cannot host this with this js so in the open look inot hosting and heroku and all that. You have a resource open to look into that
const apiKey = 'YOUR KEY HERE...';
// NOTE: YOUR KEY HERE... this is just for me to be able to post to github quickly and without my api key being out in the wild

// NOTE: this for futureuse. Will serve to store user inputed location adnthen have that location get placed into the search request below
// const userLocation = 'xyz';

cont searchRequest = {
  // NOTE: latitude and longitude are only needed if location: 'xyz', is not provided get that from the user!
  term: 'restaurants',
  latitude: '39.098487854003906',
  longitude: '-76.81920623779297',
  open_now: true
};

const client = yelp.client(apiKey);

// random integer generator, between 0(included) and 1000(not included)
// previously var rando =  Math.floor(Math.random() * (1000 - 0)) + 0;
// 21 is used instead of n - 1 for the max!
var rando = Math.floor(Math.random() * (21 - 0)) + 0;

//  To mitigate the risk of failure, I am going to limit the range from 0 - 1000, to 0 - 20. That should cover a good amount of restaurants thrown back while giving the user a good enough randomization!

// NOTE: this is just code for me to test random number generation and see output in console
// console.log(rando);


// client.search(searchRequest).then(response => {
//   // NOTE: Below where  it says .jsonBody.businesses[0] {{now response.jsonBody.businesses[rando]}}, that zero is indicating the first result in a list of results that aregiven from the after the request has been made
//
//   // NOTE: Fusion docs says that it returns up to a 1000 business based on the search criteria. So, assuming that the criteria given allows for a full response with 1000 restaurants to choose from, the bounds for a random integer creater is from 0 - 999
//   const firstResult = response.jsonBody.businesses[rando];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   // console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });


function yelpRoulette() {
  // NOTE: this is a copy of above in case it goes wrong when trying to encase this all in a function
  client.search(searchRequest).then(response => {
    // NOTE: Below where  it says .jsonBody.businesses[0] {{now response.jsonBody.businesses[rando]}}, that zero is indicating the first result in a list of results that aregiven from the after the request has been made

    // NOTE: Fusion docs says that it returns up to a 1000 business based on the search criteria. So, assuming that the criteria given allows for a full response with 1000 restaurants to choose from, the bounds for a random integer creater is from 0 - 999
    const firstResult = response.jsonBody.businesses[rando];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    // console.log(prettyJson);
    // NOTE: below is testing to see if i can get through prettyJson onto the actual page
    document.getElementById("show-roulette").innerHTML = prettyJson;
  }).catch(e => {
    console.log(e);
  });
}
