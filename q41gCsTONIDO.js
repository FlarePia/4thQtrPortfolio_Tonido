function updateRating(index, starId) {
    // Implementation for updating rating
    let text = document.getElementById(starId).innerHTML;
    console.log(text);

    if (checked[index]) {
        document.getElementById(starId).innerHTML = "&#9734;";
        checked[index] = false;
    }
    else {
        document.getElementById(starId).innerHTML = "&#9733;";
        checked[index] = true;
    }

}

let currentRating = 0; // Initialize current rating
let checked = [false, false, false, false, false];
function updateRating(index, starId) {
    if (checked[index]) {
        document.getElementById(starId).innerHTML = "&#9734;";
        checked[index] = false;
    }
    else {
        document.getElementById(starId).innerHTML = "&#9733;";
        checked[index] = true;
    }

    currentRating = checked.filter(Boolean).length; // Update current rating based on checked array
}


let input = [];
let storedInput = localStorage.getItem("input");

if (!storedInput) {
    localStorage.setItem("input", JSON.stringify([])); // Initialize local storage with an empty array
    storedInput = "[]"; // Set storedInput to an empty array string
}

input = JSON.parse(storedInput);
showMovies(); // Display movies from local storage on page load


function submitMovie() {
    let newInput = {};
    console.log("haiii");


    newInput.title = document.getElementById("title").value;
    newInput.year = document.getElementById("year").value;
    newInput.genre = document.getElementById("genre").value;
    newInput.rating = currentRating; // Use the updated current rating

    input.push(newInput);
    localStorage.setItem("input", JSON.stringify(input));

    showMovies();
    console.log(newInput);
}

function showMovies() {
    let movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear existing movie list

    input.forEach(movie => {
        let movieItem = document.createElement("div");
        movieItem.className = "movieitem";
        movieItem.innerHTML = `
            <h3>${movie.title} (${movie.year}) - ${movie.genre}, 
            Rating: ${"&#9733;".repeat(movie.rating)}${"&#9734;".repeat(5 - movie.rating)}</h3>
        `;
        movieList.appendChild(movieItem);
    })
}

let savedInput = JSON.parse(localStorage.getItem("input"));
console.log(savedInput);




