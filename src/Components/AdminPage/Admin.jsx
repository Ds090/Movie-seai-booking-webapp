import { Admin } from "../../Admin/CustomAdmin";
import NavBar from "../NavBar/NavBar";
import Asidebar from "./AsideBar";


function AdminPage() {
  
  return (
    <>
      <section className="flex w-full h-screen font-serif">
       <Asidebar/>
       <NavBar UserName={Admin.userName}/>
      </section>
    </>
  );
}

export default AdminPage;
