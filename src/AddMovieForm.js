
import React, { useState, useRef} from 'react';
import Movie from './Movie.js';

export default function AddMovieForm() {

    const [movies, setMovies] = useState([{
      id: 1,
      title: "StarWars",
      rating: 2
    }]);

    const inputTextRef = useRef();
    const inputRatingRef = useRef();

    function addMovie(event) {
        event.preventDefault();

        
        if (inputTextRef.current.value == "") {
          window.alert("Du måste ange en titel")
        } else if (inputRatingRef.current.value == 0) {
            window.alert("Du måste ange en rating")
        } else {

          const newID = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
          setMovies([...movies, {
            id: newID,
            title: inputTextRef.current.value,
            rating: inputRatingRef.current.value
          }]);
                    
          console.log("Movie added")

          inputTextRef.current.value = "";
          inputRatingRef.current.value = 0;
        }
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    };

    function sortRating() {
        const sortedList = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedList);
    }

    function sortAlpha() {
      const sortedList = [...movies].sort((a, b) => {
        const titleA = a.title.toUpperCase(); 
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        } else if (titleA > titleB) {
          return 1;
        } else {
          return 0;
        }
      });
      setMovies(sortedList);
  }

    return (
      <div>
        <form id="add-movie-form" onSubmit={addMovie}>
            <fieldset>
                <legend>Lägg till en film</legend>
    
                <label for="title-field">Titel:</label>
                <input type="text" id="title-field" className="form-control" ref={inputTextRef}></input>
    
                <label for="rating-field">Betyg:</label>
    
                <select type="text" id="rating-field" className="form-control" ref={inputRatingRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
    
                <button type="Submit" className="btn btn-success mt-3">Lägg till</button>
    
            </fieldset>
        </form>
        <h2>Filmer</h2>
        <ul id="movies" className="list-group">
          { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie}/>) }
        </ul>

        <button className="btn btn-success mt-3" onClick={sortRating}>Sortera efter rating</button>
        <button className="btn btn-success mt-3" onClick={sortAlpha}>Sortera i alfabetisk ordning</button>

      </div>
    );
  }

