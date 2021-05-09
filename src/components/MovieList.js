import React from "react";

const MovieList = (props) => {
  const NominationComponent = props.nominationComponent;
  if (props) {
    return (
      <>
        {props.movies &&
          props.movies.map((movie, index) => (
            <div className="movie-container d-flex flex-column justify-content-start m-3">
              <div className="image-container">
                <div
                  onClick={() => props.handleNominationsClick(movie)}
                  className="overlay d-flex align-items-center justify-content-center"
                >
                  <NominationComponent />
                </div>
                <img
                  src={movie.Poster}
                  onerror="this.onerror=null; this.src='No-Image-Placeholder.png'"
                ></img>
                <div className="text-container">
                  <h3 className="title-header">{movie.Title}</h3>
                  <h4 className="year-text">{movie.Year}</h4>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }
};

export default MovieList;
