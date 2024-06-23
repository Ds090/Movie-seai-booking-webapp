import Asidebar from "./AsideBar";
import { useState } from "react";
import AddUser from "../../AddDetails/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/LoginPage/LoginPageSlice";
import { Admin } from "../../Admin/CustomAdmin";
import NavBar from "../NavBar/NavBar";

export default function AddUserAdmin() {
  const [addMoviepop, setAddMoviepop] = useState(false);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  function handlePop(){
    setAddMoviepop(pre => !pre);
  }

  return (
    <div className="flex w-full h-screen font-serif">
      <Asidebar/>
      <main className="w-full">
        <NavBar UserName={Admin.userName}/>
        <section className="w-full flex justify-center items-center">
          <table className="mt-9 w-[90%] rounded-md">
            <thead className="bg-[#1a1a1a] text-white h-[50px]">
              <tr className="">
                <th className="">USER NAME</th>
                <th className="">PASSWORD</th>
                {/* <th className="border border-[#dddddd]">TIME</th> */}
                <th className="">
                  <button className="bg-black hover:bg-stone-700 py-1 px-2 rounded text-white text-[14px]" onClick={handlePop}>
                    <span className="text-xl font-semibold">+</span> ADD USER
                  </button>
                </th>
              </tr>
            </thead>
            {userData.map((e) => { 
                return (
                  <tbody key={e.id} 
                    className="odd:bg-slate-200 text-lg font-semibold h-[50px]"
                  >
                    <tr className="text-center hover:bg-slate-200">
                      <td className="">{e.userName}</td>

                      <td><input type="password" value={e.password} readOnly className="text-center outline-none bg-inherit"/></td>

                      <td>
                        <button  className="text-black hover:text-red-800 px-2 rounded text-[14px]" onClick={() => dispatch(removeUser(e.id))}>
                          Remove
                        </button>
                      </td>
                    </tr>
              </tbody>
                );
                })}
          </table>
        </section>
      </main>
      {addMoviepop ? (
        <AddUser cleanpop={setAddMoviepop}
        />
      ) : (
        ""
      )}
    </div>
  );
}
