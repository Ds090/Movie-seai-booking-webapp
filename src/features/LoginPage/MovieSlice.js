import { createSlice, nanoid } from "@reduxjs/toolkit";

let objGetData = JSON.parse(localStorage.getItem("AddMovieData")) || [];


const initialState = {
  AddMovieList: objGetData,
  
};

export const MovieSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    addMovieList: (state, action) => {
      const movieName = action.payload.movieName;
      const movieDate = action.payload.movieDate;
      const movieImg = action.payload.movieImg;
      const addMovie = {
        id: nanoid(),
        movieName: movieName,
        movieDate: movieDate,
        movieImg: movieImg,
      };
      state.AddMovieList.push(addMovie);
      localStorage.setItem("AddMovieData", JSON.stringify(state.AddMovieList));
    },

    removeMovie: (state, action) => {
      let updateList = state.AddMovieList.filter(
        (movie) => movie.id !== action.payload
      );

      localStorage.setItem("AddMovieData", JSON.stringify(updateList)) || [];
      return {
        AddMovieList: updateList,
      };
    },
    editMovie: (state, action) => {
       const {id , movieName, movieImg, movieDate} = action.payload;
       const updateMovie = state.AddMovieList.find(movie => movie.id == id);
       if (updateMovie) {
        updateMovie.movieName = movieName;
        updateMovie.movieImg = movieImg;
        updateMovie.movieDate = movieDate;
       }
      localStorage.setItem("AddMovieData", JSON.stringify(state.AddMovieList)) || [];
    }
  },
});

export const {
  addMovieList,
  removeMovie,
  editMovie
} = MovieSlice.actions;

export default MovieSlice.reducer;
