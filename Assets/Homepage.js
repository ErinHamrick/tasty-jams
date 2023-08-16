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

  let data = await searchWikipedia(track.song_name + " by " + track.artist);
  console.log(data.pages[0].key);
  console.log(`https://en.wikipedia.org/wiki/${data.pages[0].key}`);

  let WikiButton = document.createElement("button");
  WikiButton.innerHTML = "Learn More";
  WikiButton.addEventListener("click", () => {
    location.href = `https://en.wikipedia.org/wiki/${data.pages[0].key}`;
  });
  document.querySelector("#wikiButtonContainer").append(WikiButton);
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

document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

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
