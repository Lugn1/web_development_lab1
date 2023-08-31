import { movies } from "./movies-data.js";

const watchlist = new Array();

document.addEventListener("DOMContentLoaded", function () {
  populateMovieRow();
});

document.addEventListener("DOMContentLoaded", function () {
  showWatchlist();
});

function createMovieDiv(movie) {
  const movieDiv = document.createElement("div");
  const addButton = document.createElement("button");
  addButton.setAttribute("id", "addButton");
  const infoButton = document.createElement("button");
  infoButton.setAttribute("id", "infoButton");
  const movieImg = document.createElement("img");

  movieDiv.classList.add("movie");
  movieImg.src = movie.imageSrc;
  movieImg.alt = movie.title;

  updateButtonText(addButton, movie.id);
  infoButton.textContent = "Info";

  addButton.addEventListener("click", function () {
    movieClicked(movie.id);
  });

  infoButton.addEventListener("click", function () {
    showMovieInfo(movie.id);
  });

  if (isMovieInWatchlist(movie.id)) {
    const watermark = document.createElement("div");
    watermark.classList.add("watermark");
    watermark.textContent = "On Watchlist";
    movieDiv.appendChild(watermark);
  }

  movieDiv.appendChild(movieImg);
  movieDiv.appendChild(addButton);
  movieDiv.appendChild(infoButton);
  return movieDiv;
}

function isMovieInWatchlist(movieID) {
  const localStoredWatchlist = JSON.parse(
    localStorage.getItem("watchlist") || "[]"
  );
  return localStoredWatchlist.some((movie) => movie.id === movieID);
}

function removeMovieFromWatchlist(movieID) {
  const localStoredWatchlist = JSON.parse(
    localStorage.getItem("watchlist") || "[]"
  );
  const updatedWatchlist = localStoredWatchlist.filter(
    (movie) => movie.id !== movieID
  );
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
}

function populateMovieRow() {
  const movieRow = document.getElementById("movieRow");

  movies.forEach((movie) => {
    const movieDiv = createMovieDiv(movie);
    movieRow.appendChild(movieDiv);
  });
}

function updateButtonText(button, movieID) {
  if (isMovieInWatchlist(movieID)) {
    button.textContent = "Remove from watchlist";
  } else {
    button.textContent = "Add to watchlist";
  }
}

function movieClicked(movieID) {
  const clickedMovie = movies.find((movie) => movie.id === movieID);

  if (clickedMovie) {
    const localStoredWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );

    const isMovieInWatchlist = localStoredWatchlist.some(
      (movie) => movie.id === clickedMovie.id
    );

    if (!isMovieInWatchlist) {
      localStoredWatchlist.push(clickedMovie);
      localStorage.setItem("watchlist", JSON.stringify(localStoredWatchlist));
      console.log("Movie added to watchlist");
      location.reload();
    } else {
      removeMovieFromWatchlist(clickedMovie.id);
      console.log("Movie removed from watchlist");
      location.reload();
    }
  }
}

function showWatchlist() {
  const movieListContainer = document.querySelector(".movieList");
  const localStoredWatchlist = JSON.parse(
    localStorage.getItem("watchlist") || "[]"
  );

  // movieListContainer.innerHTML = "";   // Why is this needed?

  localStoredWatchlist.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieImg = document.createElement("img");
    movieImg.src = movie.imageSrc;
    movieImg.alt = movie.title;

    movieDiv.appendChild(movieImg);
    movieListContainer.appendChild(movieDiv);
  });
  console.log("localStoredWatchlist", localStoredWatchlist);
}

function showMovieInfo(movieID) {
  alert("Movie info not implemented yet");
}
