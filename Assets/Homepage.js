

const url = 'https://spotify117.p.rapidapi.com/spotify_playlist/?url=https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ?si=13e7606ad3864749';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5104218ecmsh61f115fb8126d63p13f208jsna219ed1ee5f1',
		'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
	}
  
};

function fetchAPI (){
    fetch(url, options).then((data) => {
        return data.json()
    }).then((response) =>{
    console.log(response);
})
}

fetchAPI();

let xhr = new XMLHttpRequest();

let url2 = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url2, true);

// Once request has loaded...
xhr.onload = function() {
    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
    console.log(data);

    // Log the page objects
    console.log(data.query.pages)

    // Loop through the data object
    // Pulling out the titles of each page
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);
    }
}
// Send request to the server asynchronously
xhr.send();