const fs = require("fs")
const request = require("request")

let data = JSON.parse(fs.readFileSync("data.json", "utf8"))
console.log(data)

request('https://api.jikan.moe/v3/search/anime?q=Jojo%20Bizzare%20Adventure', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
});