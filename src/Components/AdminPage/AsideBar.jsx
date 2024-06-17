import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Asidebar() {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <aside className=" w-[20%] flex flex-col gap-5 rounded-xl m-1 bg-black ">
        <div className="flex items-center justify-center gap-1 h-[50px] bg-black px-2 rounded-xl">
            <RiAdminFill className="text-2xl text-white" />
          <Link to={'/adminpage'}>
            <h1 className="lg:text-2xl font-semibold text-white">ADMIN</h1>
          </Link>
        </div>
        <div className="hover:bg-stone-900 flex justify-center rounded m-2">
          <button
            className={`py-1 px-2 ${location.pathname ===  `/adminpage/${id}/addmovieadmin` ? 'bg-stone-900' : 'bg-black'} text-slate-200 font-bold w-full`}
            onClick={() => navigate(`/adminpage/${id}/addmovieadmin`)}
          >
            MOVIE
          </button>
        </div>
        <div className="hover:bg-stone-900 flex justify-center rounded m-2">
          <button
            className={`py-1 px-2 ${location.pathname ===  `/adminpage/${id}/adduseradmin` ? 'bg-stone-900' : 'bg-black'} text-slate-200 font-bold w-full`}
            onClick={() => navigate(`/adminpage/${id}/adduseradmin`)}
          >
            USER
          </button>
        </div>
      </aside>
    )
}