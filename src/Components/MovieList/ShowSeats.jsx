/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import TimeSeat1 from "./TimeSeat/TimeSeat1.jsx";
import TimeSeat2 from "./TimeSeat/TimeSeat2.jsx";
import TimeSeat3 from "./TimeSeat/TimeSeat3.jsx";

export default function ShowSeats() {
  const { moviename, name } = useParams();
  const movieList = useSelector((state) => state.MovieSlice.AddMovieList);
  const [Time, setTime] = useState('');

  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  const SeatShow = useMemo(() => {
    if (Time === '09:00') {
      console.log('1');
      return <TimeSeat1/>;
    } else if (Time === '12:00') {
      console.log("2");
      return <TimeSeat2/>;
    }else if (Time === '03:00') {
      console.log('3');
      return <TimeSeat3/>;
    } else {
      return <div className="mt-4">Please Select The Movie Time</div>
    }
  }, [Time])
  
  return (
    <section>
      <NavBar UserName={name} />
      <main className="w-full flex justify-center flex-col items-center">
        {movieList.map((list) => {
          if (list.movieName == moviename) {
            return (
              <div
                key={list.id}
                className="w-[500px] lg:w-[40%] backdrop-blur-3xl p-2 bg-[#1a1a1a]  mt-8 text-white flex gap-6 rounded-md"
              >
                <img
                  src={list.movieImg}
                  alt=""
                  className="w-[120px] lg:w-[160px] rounded-md"
                />
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-2xl lg:text-4xl">
                    {list.movieName}
                  </h1>
                  <p className="bg-black py-1 px-2 rounded lg:text-xl">
                    2D, MX4D, ICE, 4DX, 2D SCREEN X, IMAX 2D
                  </p>
                  <p className="bg-black py-1 px-2 rounded -tracking-wider-[20px] lg:text-xl">
                    English, Hindi, Telugu, Tamil
                  </p>
                </div>
              </div>
            );
          }
        })}

          <div className="flex mt-9 items-center gap-2">
            <p className="text-xl font-semibold">Time:{" "}</p>
            <select value={Time} onChange={(e) => handleTimeChange(e)} className=" py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-[#1a1a1a] text-white text-[18px] font-semibold">
              <option value="Please Select The Movie Time">Please Select The Movie Time</option>
              <option value="09:00">09:00</option>
              <option value="12:00">12:00</option>
              <option value="03:00">03:00</option>
            </select>
          </div>
          {SeatShow}
      </main>
    </section>
  );
}
