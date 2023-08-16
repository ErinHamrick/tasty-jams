function fetchAPI() {
  const url =
    "https://spotify117.p.rapidapi.com/spotify_playlist/?url=https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ?si=13e7606ad3864749";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de8d4cd255msh8d0d9cf11e2ecacp1724f7jsn3ae9d42ef9b7",
      "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      //   console.log("response.ok: ", response.ok);
      return response.json();
    })
    .then((body) => {
      // Get all the track objects in an array
      const tracks = Object.values(body.track_details).slice(0, 100);

      // 1. Randomly select a track from body.track_details
      // 2. Parse the track.link to get the track ID
      // 3. Update the iframe's URL with that ID

      // 1.
      const track = tracks[Math.floor(Math.random() * 100)];

      // 2.
      const trackId = track.link.split("track/")[1];

      // 3.
      const iframe = document.querySelector("#track-embed");
      iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

      searchWikipedia(track.song_name + " by " + track.artist);
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
  response
    .json()
    .then((data) => {
      // console.log(data);
    })
    .catch(console.error);
}

//Dayjs will add the date and time

function updateDateTime() {
  const currentDate = dayjs().format("MMMM D, YYYY h:mm A");
  document.getElementById("current-day").textContent = currentDate;
}
updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById("btn1").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";});

document.getElementById("btn2").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";});

document.getElementById("btn3").addEventListener("click", function() {
   document.getElementById("myModal").style.display = "block";});

document.getElementById("btn4").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";});

document.getElementById("btn5").addEventListener("click", function() {
   document.getElementById("myModal").style.display = "block";});

document.getElementById("closeModalButton").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});


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
