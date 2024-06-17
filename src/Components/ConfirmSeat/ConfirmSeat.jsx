import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
export default function ConfirmSeat() {
    const navegate = useNavigate();
    const {id, name} = useParams()
    function GotoTheHomePage() {
        navegate(`/userpage/${id}/${name}`)
    }
    return (
        <>
        <div className=" w-full h-screen flex justify-center">
            <div className="mt-20 w-[70%] h-[40%] border flex flex-col justify-center items-center rounded bg-[#1a1a1a] text-white">
              <IoCheckmarkDoneCircleSharp className="text-center w-full text-8xl text-teal-400 animate-bounce"/>
              <p className="text-2xl">Ticket Confirm Successfully</p>
              <button onClick={GotoTheHomePage} className="bg-stone-800 py-2 px-4 rounded text-white font-semibold hover:bg-stone-700 mt-3">Go To The Home Page</button>
            </div>
        </div>
        </>
    )
}