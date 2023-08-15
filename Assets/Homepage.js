import { getTop100Tracks, searchWikipedia } from "./api.js";

async function loadPage() {
  const tracks = await getTop100Tracks();

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
}

loadPage();

//Dayjs will add the date and time

function updateDateTime() {
  const currentDate = dayjs().format("MMMM D, YYYY h:mm A");
  document.getElementById("current-day").textContent = currentDate;
}
updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("btn4").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("btn5").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const ratingButtons = document.querySelectorAll(".tooltip");

  ratingButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          const rating = parseInt(button.dataset.rating); // Use dataset.rating instead of getAttribute
          if (!isNaN(rating)) {
              console.log("User rated:", rating);
          } else {
              console.log("Invalid rating value");
          }
      });
  });
});

function saveRatingToLocalStorage(rating) {
  // Get existing ratings from local storage or initialize an empty array
  const existingRatings = JSON.parse(localStorage.getItem("ratings")) || [];

  // Add the new rating to the array
  existingRatings.push(rating);

  // Save the updated array back to local storage
  localStorage.setItem("ratings", JSON.stringify(existingRatings));
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
