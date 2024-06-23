/* eslint-disable no-undef */
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Admin } from "../../Admin/CustomAdmin";

let getUserData = JSON.parse(localStorage.getItem("userData")) || [];


const initialState =  {
  user: getUserData,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    addUserData: (state, action) => {
      console.log(action);
      const userName = action.payload.userName;
      const password = action.payload.password;
      const userData = {
        id: nanoid(),
        userName: userName,
        password: password,
        totalSeat: 0,
        totalAmount: 0
      };
      state.user.push(userData);
      localStorage.setItem("userData", JSON.stringify(state.user));
    },

    navigationPage: (state, action) => {
      const user_Name = action.payload.user_Name;
      const userpassword = action.payload.userpassword;
      const loadingId = action.payload.loadingId;
      const setIsloading = action.payload.setIsloading;
      const navigate = action.payload.navigate;
      const setuser_Name = action.payload.setuser_Name;
      const setuser_Password = action.payload.setuser_Password;
      
      if (user_Name.trim() !== "" && userpassword.trim() !== "") {
        loadingId.current = setInterval(() => {
          setIsloading((isLoading) => !isLoading);
          const getDataFind = getUserData.find(
            (e) => e.userName === user_Name && e.password === userpassword
          );
          if (getDataFind) {
            navigate(`/userpage/${getDataFind.id}/${getDataFind.userName}`);
            clearInterval(loadingId.current);
          } else if (
            user_Name === Admin.userName &&
            userpassword === Admin.password
          ) {
            action.payload.navigate(`/adminpage/${Admin.id}`);
            clearInterval(loadingId.current);
          } else {
            alert("Please Enter The Correct User Name and Password!");
            setuser_Name("");
            setuser_Password("");
            clearInterval(loadingId.current);
          }
        }, 1000);
      } else {
        action.payload.setIsloading(false);
        alert("Please Enter The User Name And Password!");
      }
    },

    removeUser: (state, action) => {
      let updateUser = state.user.filter((user) => user.id !== action.payload);

      localStorage.setItem("userData", JSON.stringify(updateUser)) || [];

      return {
        user: updateUser,
      };
    },

  },
});

export const {
  addUserData,
  removeUser,
  navigationPage,
  addSeat,
  bookedSeat,
  saveData,
} = userSlice.actions;

export default userSlice.reducer;
