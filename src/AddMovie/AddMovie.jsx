/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdMovie } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addMovieList } from "../features/LoginPage/MovieSlice";
import { MdOutlineCancel } from "react-icons/md";
export default function AddMovie({ cleanpop }) {
  const [date, setDate] = useState([]);
  const [MovieNme, setMovieName] = useState("");
  const [MovieImg, setMovieImg] = useState("");
  const [dateFormate, setDateFormate] = useState("");
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  function handleDate(e) {
    const datevalue = e.target.value;
    const dateFormate = datevalue.split("-");

    const setYear = dateFormate[0];
    const setMonth = dateFormate[1];
    const steDay = dateFormate[2];

    const setDateMainFormate = steDay + "-" + setMonth + "-" + setYear;
    setDate(datevalue);
    setDateFormate(setDateMainFormate);
    console.log(setDateMainFormate);
    console.log(date);
  }

  function AddMovieHandler() {
    if (
      MovieNme.trim() !== "" &&
      dateFormate.trim() !== "" &&
      MovieImg.trim() !== ""
    ) {
      const MovieData = {
        movieName: MovieNme,
        movieDate: dateFormate,
        movieImg: MovieImg,
      };
      dispatch(addMovieList(MovieData));
      cleanpop(false);
    } else {
      alert("Please Fill The Data!");
    }
  }

  function handleChangedImageUrl(e) {
    setMovieImg(URL.createObjectURL(e.target.files[0]));
  }

  function handleDeleteMovieImg() {
    setMovieImg("");
    fileInputRef.current.value = "";
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center addAnimation">
      <form className="lg:w-[450px]  flex flex-col justify-center items-center p-3 bg-[#000] gap-2 rounded-xl m-8 w-[300px] border">
        <div className="w-full flex justify-between h-[20px] mr-6">
          <MdMovie className="sm:ml-4 lg:ml-6 text-2xl text-white" />
          <button type="reset" onClick={() => cleanpop((pre) => !pre)}>
            <GrClose className="text-[20px] font-bold text-white" />
          </button>
        </div>
        <input
          type="text"
          placeholder="MOVIE NAME"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <div className="flex flex-col w-full items-center ">
          <input
            type="file"
            placeholder="MOVIE IMAGE URL"
            className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white"
            onChange={(e) => handleChangedImageUrl(e)}
            accept="image/*"
            id="files"
            multiple
            ref={fileInputRef}
          />
          
          <div className="">
           {MovieImg.trim() === "" ? "" : <MdOutlineCancel className="text-red-600 text-2xl mb-[2px] cursor-pointer mt-1" onClick={handleDeleteMovieImg}/>}
            <img src={MovieImg} className="w-[150px]" />
          </div>
        </div>

        <input
          type="date"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white "
          onChange={(e) => handleDate(e)}
        />

        <button
          type="button"
          className="bg-stone-900 lg:w-[400px]  w-full py-1 rounded-md text-white font-semibold hover:bg-stone-800 hover:transition hover:duration-500 hover:ease-in-out hover:delay-150 btn"
          onClick={AddMovieHandler}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}
