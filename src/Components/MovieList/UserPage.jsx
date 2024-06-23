import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import MovieList from "./MovieList";

function UserPage() {
    const {name} = useParams();
    return(
        <div className="flex flex-col h-screen w-full font-serif bg-[#080808]">   
         <NavBar UserName={name}/>
         <MovieList/>
        </div>
    )
}

export default UserPage;