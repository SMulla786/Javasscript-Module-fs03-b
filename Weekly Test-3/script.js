// const fetch = require("node-fetch");

const url = "https://hotels4.p.rapidapi.com/v2/get-meta-data";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b22bf29c83mshbc7400c49e49583p1094b2jsn74386e48537d",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};
// const axios = require("axios");

const url2 =
  "https://hotels4.p.rapidapi.com/locations/v3/search?q=pune&langid=1033&siteid=300000001";

async function callme() {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
  const response2 = await fetch(url2, options);

  console.log(response2);
}

callme();
