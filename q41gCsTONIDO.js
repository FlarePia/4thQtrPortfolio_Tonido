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


const input = {

};
let storedInput = localStorage.getItem("input");

if (!storedInput) {
    localStorage.setItem("input", JSON.stringify([])); // Initialize local storage with an empty array
    storedInput = "[]"; // Set storedInput to an empty array string
}

otherinput = JSON.parse(storedInput);
showMovies(); // Display movies from local storage on page load

function makeString(title, year, genre) {
    return `${title} (${year}) - ${genre}`;
}

function submitMovie() {

    let newInput = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        genre: document.getElementById("genre").value,
        rating: checked.filter(Boolean).length // Use the updated current rating
    };

    let ratings = input[makeString(newInput.title, newInput.year, newInput.genre)]?.rating || []; // Get existing ratings or initialize as empty array

    input[makeString(newInput.title, newInput.year, newInput.genre)] = {
        title: newInput.title,
        year: newInput.year,
        genre: newInput.genre,
        rating: [...ratings, newInput.rating]
    }

    localStorage.setItem("input", JSON.stringify(input));

    showMovies();
    console.log(newInput);
}

function showMovies() {
    let movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear existing movie list

    for (let movie of Object.values(input)) {
        let movieItem = document.createElement("div");
        movieItem.className = "movieitem";
        const averageRating = Math.round(movie.rating.reduce((a, b) => a + b, 0) / movie.rating.length); // Calculate average rating
        movieItem.innerHTML = `
            <h3>${makeString(movie.title, movie.year, movie.genre)}</h3>
            Rating: <span class = "star">${"&#9733;".repeat(averageRating)}${"&#9734;".repeat(5 - averageRating)}</span></h3>
            <button type="button" onclick="checkMovie('${makeString(movie.title, movie.year, movie.genre)}')">Delete</button>
        `;

        movieList.appendChild(movieItem);
    }
}

let savedInput = JSON.parse(localStorage.getItem("input"));
console.log(savedInput);


/**
             let button = document.createElement("button");
        button.textContent = "Click me";

        document.body.appendChild(button);
 */

function checkMovie(title) {
    if (confirm("Are you sure you want to delete?")) {
        alert("Movies cleared!"); // Alert if user confirms
        deleteMovie(title); // Clear movies if user confirms' 
        // clearMovie(title);
    }
    else {
        alert("Action cancelled."); // Alert if user cancels
        return; // Exit the function if user cancels
    }
}

function clearMovie(title) {
    localStorage.removeItem("input"); // Clear movies from local storage
    inputArray = []; // Clear the input array
    showMovies(); // Update the movie list display
}

function deleteMovie(title) {
    if (input[title]) {
        delete input[title];
    }

    localStorage.setItem("input", JSON.stringify(input)); // Update local storage
    showMovies(); // Update the movie list display
}

