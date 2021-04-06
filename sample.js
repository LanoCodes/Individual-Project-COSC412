'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'YOUR KEY HERE';


const searchRequest = {
  // NOTE: lat and long not needed! Only needed if location: 'xyz', is not provided
  term: 'restaurants',
  latitude: '39.098487854003906',
  longitude: '-76.81920623779297'
};

const client = yelp.client(apiKey);

// random integer generator, between 0(included) and 1000(not included)
var rando =  Math.floor(Math.random() * (1000 - 0)) + 0;
// NOTE: generator works!! Now, to pop into business request
console.log(rando);


client.search(searchRequest).then(response => {

  // NOTE: Below where  it says .jsonBody.businesses[0], that zero is indicating the first result in a list of results that aregiven from the after the request has been made

  // To make it more "roulette-y," I should make a random number, within the acceptable range, put it in a variable, and then place that variable in place of that zero in brackets.

  // NOTE: Fusion docs says that it returns up to a 1000 business based on the search criteria. So, assuming that the criteria given allows for a full response with 1000 restaurants to choose from, the bounds for a random integer creater is from 0 - 999
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

// NOTE: after grabbing a business, you might want to use location data to get users there?? the endpoint that seems to handle that is businesses[x].location, where x is our random number (?)
