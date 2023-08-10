 function fetchAPI() {
  const url =
    "https://spotify117.p.rapidapi.com/spotify_playlist/?url=https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ?si=13e7606ad3864749";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b5104218ecmsh61f115fb8126d63p13f208jsna219ed1ee5f1",
      "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      //   console.log("response.ok: ", response.ok);
      return response.json();
    })
    .then((body) => {
      console.log(body);
      searchWikipedia(
        body.track_details[0].song_name + " by " + body.track_details[0].artist
      );
    });
}

fetchAPI();

// Search English Wikipedia for 10 articles about Earth

async function searchWikipedia(searchTerm) {
  let url = `https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${searchTerm}&limit=10`;
  let response = await fetch(url, {
    //   headers: {
    //     Authorization: "Bearer YOUR_ACCESS_TOKEN",
    //     "Api-User-Agent": "YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)",
    //   },
  });
  response.json().then(console.log).catch(console.error);
}

// let xhr = new XMLHttpRequest();

// let url2 =
//   "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// // Provide 3 arguments (GET/POST, The URL, Async True/False)
// xhr.open("GET", url2, true);

// // Once request has loaded...
// xhr.onload = function () {
//   // Parse the request into JSON
//   var data = JSON.parse(this.response);

//   // Log the data object
//   console.log(data);

//   // Log the page objects
//   console.log(data.query.pages);

//   // Loop through the data object
//   // Pulling out the titles of each page
//   for (var i in data.query.pages) {
//     console.log(data.query.pages[i].title);
//   }
// };
// // Send request to the server asynchronously
// xhr.send();
