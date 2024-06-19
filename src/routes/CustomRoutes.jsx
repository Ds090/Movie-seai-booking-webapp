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
import EditMovie from "../AddMovie/EditMovie";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            {/* This is User Page Routes */}
            <Route path="/userpage/:id/:name" element={<UserPage/>}/>
            <Route path="/userpage/:id/:name/:movieid/:moviename" element={<ShowSeats/>} />
            <Route path="/userpage/:id/:name/:id/:moviename/seatbooked" element={<ConfirmSeat/>} />

            {/* This is Admin Page Routes */}
            <Route path="/adminpage/:id" element={<AdminPage/>}/> 
            <Route path="/adminpage/:id/adduseradmin" element={<AddUserAdmin/>} />
            <Route path="/adminpage/:id/addmovieadmin" element={<AddMovieAdmin />} />
            <Route path="/adminpage/:id/addmovieadmin/:movieid" element={<EditMovie/>} />
        </Routes>
    );
}

export default CustomRoutes;