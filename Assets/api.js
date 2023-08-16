export async function getTop100Tracks() {
  const url =
    "https://spotify117.p.rapidapi.com/spotify_playlist/?url=https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ?si=13e7606ad3864749";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de8d4cd255msh8d0d9cf11e2ecacp1724f7jsn3ae9d42ef9b7",
      "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
    },
  };

  // 2. Check the cache
  const tracks = localStorage.getItem("tracks");
  if (tracks) {
    return JSON.parse(tracks);
  }

  return await fetch(url, options)
    .then((response) => {
      //   console.log("response.ok: ", response.ok);
      return response.json();
    })
    .then((body) => {
      // Get all the track objects in an array
      const tracks = Object.values(body.track_details).slice(0, 100);

      // 1. Cache the tracks
      localStorage.setItem("tracks", JSON.stringify(tracks));

      return tracks;
    });
}

// Search English Wikipedia for 10 articles about Earth

export async function searchWikipedia(searchTerm) {
  let url = `https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${searchTerm}&limit=10`;
  return await fetch(url, {
    //   headers: {
    //     Authorization: "Bearer YOUR_ACCESS_TOKEN",
    //     "Api-User-Agent": "YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)",
    //   },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.error);
}
