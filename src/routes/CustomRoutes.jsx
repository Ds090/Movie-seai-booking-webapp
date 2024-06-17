/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Components/LoginPage/LoginPage";
import UserPage from "../Components/MovieList/UserPage";
import AdminPage from "../Components/AdminPage/Admin";
import AddUserAdmin from "../Components/AdminPage/AddUserAdmin";
import AddMovieAdmin from "../Components/AdminPage/AddMovieAdmin";
import ShowSeats from "../Components/MovieList/ShowSeats";
import ConfirmSeat from "../Components/ConfirmSeat/ConfirmSeat";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/userpage/:id/:name" element={<UserPage/>}/>
            <Route path="/userpage/:id/:name/:movieid/:moviename" element={<ShowSeats/>} />
            <Route path="/userpage/:id/:name/:id/:moviename/seatbooked" element={<ConfirmSeat/>} />
            <Route path="/adminpage/:id" element={<AdminPage/>}/> 
            <Route path="/adminpage/:id/adduseradmin" element={<AddUserAdmin/>} />
            <Route path="/adminpage/:id/addmovieadmin" element={<AddMovieAdmin />} />
        </Routes>
    );
}

export default CustomRoutes;