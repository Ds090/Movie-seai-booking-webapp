/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../../Loader/Loader";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import NavBar from '../NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { navigationPage } from "../../features/LoginPage/LoginPageSlice";

function LoginPage() {
  const [user_Name, setuser_Name] = useState("");
  const [userpassword, setuser_Password] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [showPassword, setShowPassword] = useState('password');
  const [isShowPassword, setIsShowpassword] = useState(true);
  const loadingId = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  

  function handleChange(event) {
    setuser_Name(event.target.value);
  }
  
  function navigation() {
    setIsloading((isLoading) => !isLoading);
    
    dispatch(navigationPage({
      user_Name: user_Name,
      setuser_Name: setuser_Name,
      userpassword: userpassword,
      setuser_Password: setuser_Password,
      isLoading: isLoading,
      setIsloading: setIsloading,
      loadingId: loadingId,
      navigate: navigate,
    }))    
  }

  useEffect(() => {
    return () => clearInterval(loadingId.current);
  }, [])

  function handleShowPassword() {
    if (showPassword === 'text') {
      setShowPassword('password');
      setIsShowpassword(true);
    } else if (showPassword === 'password') {
      setShowPassword('text');
      setIsShowpassword(false);
    }
  }

  return (
    <>
   <main className=" bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg)] w-full h-screen">
      <NavBar />
    <section className="w-full flex flex-col justify-center items-center mt-[135px]">
      <form
        className="flex flex-col justify-center items-center bg-[#010205e2] md:w-[400px] md:h-[400px] w-[350px] h-[350px]  rounded gap-4 shadow-lg border border-black shadow-black"
      >
        <div className="flex flex-col justify-center items-center">
          <FaUser className="text-4xl text-teal-300 animate-bounce" />
          <h1 className="text-3xl font-bold bg-gradient-to-t from-white to-teal-600 text-transparent bg-clip-text ">USER / ADMIN LOGIN</h1>
        </div>
        <input
          type="text"
          onChange={handleChange}
          className="text-white py-2 px-1 rounded text-lg w-[300px] bg-[#29252400] outline-none focus:ring-offset-blue-300 focus:ring-1 border-b-2 border-stone-200"
          placeholder="USER NAME"
          value={user_Name}
        />
        <div className="w-[300px] flex justify-end items-center">
        <input
          type={showPassword}
          onChange={(e) => setuser_Password(() => e.target.value)}
          className="text-white py-2 px-1 rounded text-lg w-[300px] bg-[#29252400] outline-none focus:ring-offset-blue-300 focus:ring-1 border-b-2 border-stone-200"
          placeholder="PASSWORD"
          value={userpassword}
        />
        {isShowPassword ? <FaEyeSlash className="absolute mr-2 text-[22px] text-teal-300 cursor-pointer" onClick={handleShowPassword}/> : <FaEye className="absolute mr-2 text-[22px]  text-teal-300 cursor-pointer" onClick={handleShowPassword}/>}
        
        </div>
        
          <button
            type="button"
            className="text-white bg-stone-900 border-0 py-2 px-6 focus:outline-none hover:bg-stone-800 rounded text-lg font-semibold w-[180px]"
            onClick={navigation}>
            LOGIN
          </button>
      </form>
    {isLoading ? <SpinnerLoader/> : ""}
    </section>
   </main>
    </>
    
  );
}

export default LoginPage;
