import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { MdMovie } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editMovie } from "../features/LoginPage/MovieSlice";

export default function EditMovie() {
  const { movieid, id } = useParams();
  const MovieList = useSelector((state) => state.MovieSlice.AddMovieList);
  const existingMovie = MovieList.find(movie => movie.id == movieid);

  // Initialize state variables
  const [date, setDate] = useState('');
  const [MovieNme, setMovieName] = useState(existingMovie ? existingMovie.movieName : '');
  const [MovieImg, setMovieImg] = useState(existingMovie ? existingMovie.movieImg : '');
  const [dateFormate, setDateFormate] = useState(existingMovie ? existingMovie.movieDate : '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (existingMovie) {
      setMovieName(existingMovie.movieName);
      setMovieImg(existingMovie.movieImg);
      setDateFormate(existingMovie.movieDate);
    }
  }, [existingMovie]);

  function handleDate(e) {
    const datevalue = e.target.value;
    const dateFormate = datevalue.split("-");

    const setYear = dateFormate[0];
    const setMonth = dateFormate[1];
    const steDay = dateFormate[2];

    const setDateMainFormate = `${steDay}-${setMonth}-${setYear}`;
    setDate(datevalue);
    setDateFormate(setDateMainFormate);
    console.log(setDateMainFormate);
    console.log(date);
  }

  function AddMovieHandler() {
    if (MovieNme.trim() !== "" && dateFormate.trim() !== "" && MovieImg.trim() !== "") {
      const MovieData = {
        id: movieid,
        movieName: MovieNme,
        movieDate: dateFormate,
        movieImg: MovieImg,
      };
      dispatch(editMovie(MovieData)); // Dispatch the correct action
      navigate(`/adminpage/${id}/addmovieadmin`);
    } else {
      alert("Please Fill The Data!");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center addAnimation">
      <form className="lg:w-[450px] lg:h-[300px] flex flex-col justify-center items-center p-3 bg-[#000] gap-2 rounded-xl m-8 w-[300px] border">
        <div className="w-full flex justify-between h-[20px] mr-6">
          <MdMovie className="sm:ml-4 lg:ml-6 text-2xl text-white" />
          <button type="reset" onClick={() => navigate(`/adminpage/${id}/addmovieadmin`)}>
            <GrClose className="text-[20px] font-bold text-white" />
          </button>
        </div>
        <input
          type="text"
          placeholder="MOVIE NAME"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white"
          onChange={(e) => setMovieName(e.target.value)}
          value={MovieNme}
        />
        <input
          type="text"
          placeholder="MOVIE IMAGE URL"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white"
          onChange={(e) => setMovieImg(e.target.value)}
          value={MovieImg}
        />

        <input
          type="date"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white"
          onChange={(e) => handleDate(e)}
          value={date}
        />

        <button
          type="button"
          className="bg-stone-900 lg:w-[400px] w-full py-1 rounded-md text-white font-semibold hover:bg-stone-800 hover:transition hover:duration-500 hover:ease-in-out hover:delay-150 btn"
          onClick={AddMovieHandler}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}
