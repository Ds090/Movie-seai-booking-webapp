/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AddMovie from "../../AddMovie/AddMovie";
import { useDispatch, useSelector } from "react-redux";
import Asidebar from "./AsideBar";
import { Admin } from "../../Admin/CustomAdmin";
import NavBar from "../NavBar/NavBar";
import { editMovie, removeMovie } from "../../features/LoginPage/MovieSlice";
import EditMovie from "../../AddMovie/EditMovie";
import { useNavigate, useParams } from "react-router-dom";

export default function AddMovieAdmin() {
  const [addMoviepop, setAddMoviepop] = useState(false);
  const {id} = useParams()
  const dispatch = useDispatch();
  const MovieData = useSelector((state) => state.MovieSlice.AddMovieList);
  const navigate = useNavigate();
  const handleAddMoviePop = () => {
    setAddMoviepop((Add) => !Add);
  };

  function handleRemoveData(id) {
    dispatch(removeMovie(id));
  }

  function handleEdit(Id) {
    navigate(`/adminpage/${id}/addmovieadmin/${Id}`)
  }

  console.log(MovieData);
  return (
    <div className="flex w-full h-screen font-serif">
      <Asidebar />
      <main className="w-full">
        <NavBar UserName={Admin.userName} />
        <section className="w-full flex justify-center items-center">
          <table className="mt-9 w-[90%] rounded-md">
            <thead className="bg-black text-white h-[50px] rounded-md">
              <tr className="">
                <th className="">MOVIE NAME</th>
                <th className="">DATE</th>
                {/* <th className="border border-[#dddddd]">TIME</th> */}
                <th className="">
                  <button
                    onClick={handleAddMoviePop}
                    className="bg-stone-900  hover:bg-stone-800 py-1 px-2 rounded text-white text-[14px]"
                  >
                    <span className="text-xl font-semibold">+</span> ADD MOVIE
                  </button>
                </th>
              </tr>
            </thead>
            {MovieData.map((e) => {
              return (
                  <tbody
                    key={e.id}
                    className="odd:bg-slate-200 text-lg font-semibold h-[50px]"
                  >
                    <tr className="text-center hover:bg-slate-200">
                      <td className="">{e.movieName}</td>

                      <td className="">{e.movieDate}</td>
                      <td className="">
                        <button
                          className="text-black hover:text-red-800 px-2 rounded text-[14px]"
                          onClick={() => handleRemoveData(e.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="text-black hover:text-red-800 px-2 rounded text-[14px]"
                          onClick={() => handleEdit(e.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                
              );
            })}
          </table>
        </section>
      </main>
      {addMoviepop ? <AddMovie cleanpop={setAddMoviepop} /> : ""}
    </div>
  );
}
