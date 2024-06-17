import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import MovieList from "./MovieList";

function UserPage() {
    const {name} = useParams();
    return(
        <div className="flex flex-col h-auto w-full font-serif ">   
         <NavBar UserName={name}/>
         <MovieList/>
        </div>
    )
}

export default UserPage;