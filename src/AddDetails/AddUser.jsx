/* eslint-disable react/prop-types */
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { addUserData } from "../features/LoginPage/LoginPageSlice";
import { MdMovie } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
export default function AddUser({cleanpop}){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);

   function AddMovieHandler() {
    const getDataFind = userData.find((e) => e.userName === userName);
    console.log(getDataFind);
    
    if (userName.trim() !== "" && password.trim() !== "") {  
      if (getDataFind) {
        alert("Please Enter the Unique User Name and Password!")
      }else{
        const MovieData = {
          userName: userName,
          password: password
        }
        dispatch(addUserData(MovieData));
        cleanpop(false);
      }
    }else{
      alert("Please Fill The Data!")
    }
   }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center addAnimation">
      <form className="lg:w-[450px] lg:h-[200px] flex flex-col justify-center items-center p-3 bg-[#000] gap-2 rounded-xl m-8 w-[300px] border">
        <div className="w-full flex justify-between h-[20px] mr-6">
          <MdMovie className="sm:ml-4 lg:ml-6 text-2xl text-white"/>
          <button type="reset" onClick={() => cleanpop(pre => !pre)}>
            <GrClose className="text-[20px] font-bold text-white" />
          </button>
        </div>
        <input
          type="text"
          placeholder="USER NAME"
          className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white" onChange={(e) => setUserName(e.target.value)}
        />

        <input type="text" className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-stone-900 text-white border-b-2 border-b-stone-600 focus:border-b-white" onChange={(e) => setPassword(e.target.value)} placeholder="PASSWORD"/>
        
        <button type="button"
          className="bg-stone-900 lg:w-[400px]  w-full py-1 rounded-md text-white font-semibold hover:bg-stone-800 hover:transition hover:duration-500 hover:ease-in-out hover:delay-150 btn"
          onClick={AddMovieHandler}
        >
          ADD USER
        </button>
      </form>
    </div>
    ) 
}