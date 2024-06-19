import { RiAdminFill } from "react-icons/ri";
import { Link, NavLink, useParams } from "react-router-dom";

export default function Asidebar() {
    // const navigate = useNavigate();
    const {id} = useParams();
    return (
        <aside className=" w-[20%] flex flex-col gap-5 rounded-md m-[2px] bg-[#1a1a1a] ">
        <div className="flex items-center justify-center gap-1 h-[50px] bg-[bg-[#1a1a1a]] px-2 rounded-xl">
            <RiAdminFill className="text-2xl text-white" />
          <Link to={'/adminpage'}>
            <h1 className="lg:text-2xl font-semibold text-white">ADMIN</h1>
          </Link>
        </div>
        <div className="hover:bg-stone-900 flex justify-center rounded m-2">
          <NavLink to={`/adminpage/${id}/addmovieadmin`}
            className={({isActive}) =>  `py-1 px-2 ${ isActive ? 'bg-black' : 'bg-[#1a1a1a]'} text-slate-200 font-bold w-full rounded text-center`}
          >
            MOVIE
          </NavLink>
        </div>
        <div className="hover:bg-stone-900 flex justify-center rounded m-2">
          <NavLink to={`/adminpage/${id}/adduseradmin`}
            className={({ isActive }) => `py-1 px-2 ${isActive ? 'bg-black' : 'bg-[#1a1a1a]'} text-slate-200 font-bold w-full rounded text-center`}
            
          >
            USER
          </NavLink>
        </div>
      </aside>
    )
}