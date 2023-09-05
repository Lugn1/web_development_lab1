import { movies } from "./movies-data.js";

const watchlist = new Array();

document.addEventListener("DOMContentLoaded", function () {
  populateMovieRow();
});

document.addEventListener("DOMContentLoaded", function () {
  showWatchlist();
});

document.addEventListener("DOMContentLoaded", function () {
  populateRatedMovies();
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
    console.log("Info button clicked");
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
  const movieListContainer = document.querySelector("#watchList");
  const localStoredWatchlist = JSON.parse(
    localStorage.getItem("watchlist") || "[]"
  );

  localStoredWatchlist.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieImg = document.createElement("img");
    movieImg.src = movie.imageSrc;
    movieImg.alt = movie.title;

    const rateButton = document.createElement("button");
    rateButton.textContent = "Rate";
    rateButton.setAttribute("id", "rateButton");
    rateButton.addEventListener("click", function () {
      rateMovie(movie.id);
    });

    movieDiv.appendChild(movieImg);
    movieDiv.appendChild(rateButton);
    movieListContainer.appendChild(movieDiv);
  });
  console.log("localStoredWatchlist", localStoredWatchlist);
}

function showMovieInfo(movieID) {
  console.log("showMovieInfo", movieID);
  const movie = movies.find((movie) => movie.id === movieID);
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modalContent");

  const movieTitle = document.createElement("h1");
  movieTitle.textContent = movie.title;

  const movieYearAndGenre = document.createElement("h4");
  movieYearAndGenre.textContent = movie.year + "  -  " + movie.genres;

  const plot = document.createElement("p");
  plot.textContent = movie.plot;

  const closeButton = document.createElement("span");
  closeButton.classList.add("closeButton");
  closeButton.textContent = "x";
  closeButton.addEventListener("click", function () {
    hideMovieInfo(modal);
  });

  modalContent.appendChild(movieTitle);
  modalContent.appendChild(movieYearAndGenre);
  modalContent.appendChild(plot);

  modalContent.appendChild(closeButton);

  modal.appendChild(modalContent);

  document.body.appendChild(modal);
  console.log("showMovieInfo", movie.plot);

  modal.style.display = "block";

  modal.addEventListener("click", function () {
    if (target === modal) {
      hideMovieInfo(modal);
    }
  });
}

function hideMovieInfo(modal) {
  modal.style.display = "none";
}

function rateMovie(movieID) {
  const rating = prompt("Enter your rating (1-5):");
  if (rating !== null && !isNaN(rating) && rating >= 1 && rating <= 5) {
    const comments = prompt("Enter your comments:");
    if (comments !== null) {
      const movie = movies.find((movie) => movie.id === movieID);
      const ratedMovie = {
        id: movieID,
        title: movie.title,
        imageSrc: movie.imageSrc,
        rating: parseInt(rating),
        comments: comments,
      };
      const ratedMovies = JSON.parse(
        localStorage.getItem("ratedMovies") || "[]"
      );
      ratedMovies.push(ratedMovie);
      localStorage.setItem("ratedMovies", JSON.stringify(ratedMovies));
      console.log("Movie rated and comments saved.");
    }
  }
}

function populateRatedMovies() {
  const ratedMoviesContainer = document.querySelector("#ratedMovies");
  const ratedMovies = JSON.parse(localStorage.getItem("ratedMovies") || "[]");

  ratedMovies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieImg = document.createElement("img");
    movieImg.src = movie.imageSrc;
    movieImg.alt = movie.title;

    const rating = document.createElement("h4");
    rating.textContent = "Rating: " + movie.rating;

    const comments = document.createElement("p");
    comments.textContent = movie.comments;

    movieDiv.appendChild(movieImg);
    movieDiv.appendChild(rating);
    movieDiv.appendChild(comments);
    ratedMoviesContainer.appendChild(movieDiv);
  });
  console.log("ratedMovies", ratedMovies);
}
