let movies = [];

fetch("./movies-data.json")
  .then((response) => response.json())
  .then((data) => {
    movies = data;

    populateMovieRow();
    showWatchlist();
    populateRatedMovies();

    function createMovieDiv(movie) {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.setAttribute("movieID", movie.id);

      const movieImg = document.createElement("img");
      movieImg.src = movie.imageSrc;
      movieImg.alt = movie.title;
      movieDiv.appendChild(movieImg);

      const addButton = createAddButton(movie.id);
      movieDiv.appendChild(addButton);

      const infoButton = createInfoButton(movie.id);
      movieDiv.appendChild(infoButton);

      if (isMovieInWatchlist(movie.id)) {
        const watermark = createWatermark();
        movieDiv.appendChild(watermark);
      }

      return movieDiv;
    }

    function createAddButton(movieID) {
      const addButton = document.createElement("button");
      addButton.classList.add("addButton");
      addButton.setAttribute("id", `addButton-${movieID}`);

      updateButtonText(addButton, movieID);
      addButton.addEventListener("click", function () {
        movieClicked(movieID);
      });

      return addButton;
    }

    function createInfoButton(movieID) {
      const infoButton = document.createElement("button");
      infoButton.classList.add("infoButton");
      infoButton.setAttribute("data-action-id", movieID);
      infoButton.textContent = "Info";

      infoButton.addEventListener("click", function () {
        showMovieInfo(movieID);
      });

      return infoButton;
    }

    function createWatermark() {
      const watermark = document.createElement("div");
      watermark.classList.add("watermark");
      watermark.textContent = "On Watchlist";

      return watermark;
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

      showWatchlist();
    }

    function populateMovieRow() {
      const movieRow = document.getElementById("movieRow");
      if (movieRow === null) {
        return;
      }

      movies.forEach((movie) => {
        const movieDiv = createMovieDiv(movie);
        movieRow.appendChild(movieDiv);
      });
    }

    function updateButtonText(button, movieID) {
      if (isMovieInWatchlist(movieID)) {
        button.textContent = "Remove";
      } else {
        button.textContent = "Add";
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
          localStorage.setItem(
            "watchlist",
            JSON.stringify(localStoredWatchlist)
          );
        } else {
          removeMovieFromWatchlist(clickedMovie.id);
        }
      }

      const addButton = document.getElementById(`addButton-${movieID}`);
      updateButtonText(addButton, movieID);

      const watermarkDiv = document.querySelector(
        `.movie[movieID='${movieID}']`
      );

      if (isMovieInWatchlist(movieID)) {
        const watermark = document.createElement("div");
        watermark.classList.add("watermark");
        watermark.textContent = "On Watchlist";
        watermarkDiv.appendChild(watermark);
      } else {
        const watermark = watermarkDiv.querySelector(".watermark");
        if (watermark) {
          watermarkDiv.removeChild(watermark);
        }
      }
    }

    function showWatchlist() {
      const movieListContainer = document.querySelector("#watchList");
      if (movieListContainer === null) {
        return;
      }
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
          rateMovie(movie.id, movieDiv);
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("id", "removeButton");
        removeButton.addEventListener("click", function () {
          removeMovieFromWatchlist(movie.id);
          movieDiv.remove();
        });

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(rateButton);
        movieDiv.appendChild(removeButton);
        movieListContainer.appendChild(movieDiv);
      });
    }

    function showMovieInfo(movieID) {
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

      modal.style.display = "block";

      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          hideMovieInfo(modal);
        }
      });
    }

    function hideMovieInfo(modal) {
      modal.style.display = "none";
    }

    function rateMovie(movieID, movieDiv) {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modalContent");

      const ratingForm = document.createElement("form");

      const ratingLabel = document.createElement("label");
      ratingLabel.textContent = "Enter your rating (1-10): ";
      const ratingInput = document.createElement("input");
      ratingInput.type = "number";
      ratingInput.min = 1;
      ratingInput.max = 10;
      ratingInput.required = true;
      ratingLabel.appendChild(ratingInput);

      const commentsLabel = document.createElement("label");
      commentsLabel.textContent = "Enter your comments: ";
      const commentsInput = document.createElement("textarea");
      commentsInput.required = false;
      commentsLabel.appendChild(commentsInput);

      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";

      const removeWatchlistCheckbox = document.createElement("label");
      removeWatchlistCheckbox.textContent = "Remove from watchlist: ";
      const removeWatchlistInput = document.createElement("input");
      removeWatchlistInput.type = "checkbox";
      removeWatchlistCheckbox.appendChild(removeWatchlistInput);

      ratingForm.appendChild(ratingLabel);
      ratingForm.appendChild(commentsLabel);
      ratingForm.appendChild(removeWatchlistCheckbox);
      ratingForm.appendChild(submitButton);

      modalContent.appendChild(ratingForm);

      ratingForm.onsubmit = function (event) {
        event.preventDefault();
        const movie = movies.find((movie) => movie.id === movieID);
        const ratedMovie = {
          id: movieID,
          title: movie.title,
          imageSrc: movie.imageSrc,
          rating: parseInt(ratingInput.value),
          comments: commentsInput.value,
        };

        const ratedMovies = JSON.parse(
          localStorage.getItem("ratedMovies") || "[]"
        );

        const existingMovie = ratedMovies.findIndex(
          (movie) => movie.id === movieID
        );

        if (existingMovie !== -1) {
          ratedMovies[existingMovie] = ratedMovie;
        } else {
          ratedMovies.push(ratedMovie);
        }
        localStorage.setItem("ratedMovies", JSON.stringify(ratedMovies));
        hideMovieInfo(modal);

        if (removeWatchlistInput.checked) {
          removeMovieFromWatchlist(movieID);
          movieDiv.remove();
        }
      };

      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      modal.style.display = "block";

      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          hideMovieInfo(modal);
        }
      });
    }

    function populateRatedMovies() {
      const ratedMoviesContainer = document.querySelector("#ratedMovies");
      if (ratedMoviesContainer === null) {
        return;
      }
      const ratedMovies = JSON.parse(
        localStorage.getItem("ratedMovies") || "[]"
      );

      ratedMovies.sort((a, b) => b.rating - a.rating);

      ratedMovies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("ratedMovie");

        const movieImg = document.createElement("img");
        movieImg.src = movie.imageSrc;
        movieImg.alt = movie.title;

        const movieTitle = document.createElement("h1");
        movieTitle.textContent = movie.title;

        const rating = document.createElement("h2");

        rating.textContent = "Rating: " + movie.rating + "/10";

        const comments = document.createElement("p");
        comments.textContent = movie.comments;

        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieImg);

        movieDiv.appendChild(rating);
        movieDiv.appendChild(comments);
        ratedMoviesContainer.appendChild(movieDiv);
      });
    }
  });
