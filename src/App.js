import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddNominations from "./components/AddNominations";
import RemoveNominations from "./components/RemoveNominations";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNomination] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=395f83a4`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(
      localStorage.getItem("the-shoppies-app-nominations")
    );
    setNomination(movieNominations);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("the-shoppies-app-nominations", JSON.stringify(items));
  };

  const addNomination = (movie) => {
    if (nominations) {
      if (nominations.includes(movie)) {
        store.addNotification({
          title: "Already Nominated",
          message: "Sorry, you already nominated this movie. ",
          type: "warning",
          container: "top-right",
          insert: "top",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2500,
          },
        });
      } else {
        if (nominations.length >= 5) {
          store.addNotification({
            title: "Limit Reached!",
            message: "Please remove a movie from your nominations list first. ",
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2500,
            },
          });
        } else {
          const newNominationList = [...nominations, movie];
          setNomination(newNominationList);
          saveToLocalStorage(newNominationList);
          store.addNotification({
            title: "Successfully added!",
            message: "This movie has been added to your Nominations list. ",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2500,
            },
          });
        }
      }
    }
  };
  const removeNomination = (movie) => {
    const newNominationList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNomination(newNominationList);
    saveToLocalStorage(newNominationList);
  };
  return (
    <div className="container-fluid the-shoppies-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleNominationsClick={addNomination}
          nominationComponent={AddNominations}
        />
        <ReactNotification />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Nominations" />
      </div>
      <div className="row">
        <MovieList
          movies={nominations}
          handleNominationsClick={removeNomination}
          nominationComponent={RemoveNominations}
        />
      </div>
    </div>
  );
};

export default App;
