/* eslint-disable no-undef */
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Admin } from "../../Admin/CustomAdmin";

let getUserData = JSON.parse(localStorage.getItem("userData")) || [];

function loadStateData() {
  try{
    const serializedData = localStorage.getItem('seatBookingData');
    if (serializedData === null) {
      return undefined
    }
    return JSON.parse(serializedData);
  }catch(err){
    return undefined
  }
}

function StoreData(state) {
  try{
    const serializedData = JSON.stringify(state);
    localStorage.setItem('seatBookingData', serializedData);
  }catch(err){
    console.log(err);
  }
}
const initialState = loadStateData() || {
  user: getUserData,
  Sliver: {
    seat: Array.from({length: 77}, (_, i) => ({
      id: i + 1,
      isSelect: false, 
      booked: false
  })),
    price: 180,
    countSeat: 0,
  },
  Gold: {
    seat: Array.from({length: 77}, (_, i) => ({
      id: i + 1,
      isSelect: false, 
      booked: false
    })),
    price: 250,
    countSeat: 0,
  },

  Platinum: {
    seat: Array.from({length: 55}, (_, i) => ({
      id: i + 1,
      isSelect: false, 
      booked: false
    })),
    price: 350,
    countSeat: 0,
  },
  totalAmount: 0
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

    addSeat: (state, action) => {
      let Id = action.payload.id;
      let category = action.payload.category;
      console.log(Id);
       const seat = state[category].seat.find(e => e.id  === Id);

       if (seat) {
        seat.isSelect = !seat.isSelect;

        if (seat.isSelect) {
          state.totalAmount += state[category].price;
          state[category].countSeat += 1;
        } else{
          state.totalAmount -= state[category].price;
          state[category].countSeat -= 1
        }
      }
    },
    saveData: (state, action) => {
      state.totalAmount = 0;
      let Sliver = action.payload.Sliver;
      let Gold = action.payload.Gold;
      let Platinum = action.payload.Platinum;

      console.log(Sliver, Gold, Platinum);

      state[Sliver].seat.forEach(seat => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      state[Gold].seat.forEach(seat => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      state[Platinum].seat.forEach(seat => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      StoreData(state);
    }
    
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
