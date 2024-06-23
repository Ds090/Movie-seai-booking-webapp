/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom";
import Img from "../MovieList/th3.jpeg";
export default function NavBar({ UserName }) {
  return (
    <nav
      className={`w-full h-[60px] flex justify-between items-center px-3 ${
        location.pathname === "/"
          ? "border-none"
          : ""
      }`}
    >
      <img
        src={Img}
        alt=""
        className="w-[80px] h-[40px] rounded-md border-black border"
      />
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-white fons">{UserName}</h1>
        {location.pathname === '/' ? "" : <NavLink to=".." className=" py-1 px-4 rounded font-semibold hover:bg-stone-800 bg-stone-900 text-white" >LOGOUT</NavLink>}
      </div>
    </nav>
  );
}
