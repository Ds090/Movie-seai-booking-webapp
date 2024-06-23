import { createSlice} from "@reduxjs/toolkit";

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
  totalAmount: 0,
  totalSeat: 0
};

export const TimeSlice1 = createSlice({
  name: "TimeSlice1",
  initialState,
  reducers: {
    addSeatTimeSlice1: (state, action) => {
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
          state[category].countSeat -= 1;
        }
        
      }
    },
    saveDataTimeSlice1: (state, action) => {
      let Sliver = action.payload.Sliver;
      let Gold = action.payload.Gold;
      let Platinum = action.payload.Platinum;
      let id = action.payload.id;
      
      const TotalSeat = state[Sliver].countSeat + state[Gold].countSeat + state[Platinum].countSeat;
      
      state.totalSeat += TotalSeat;
      console.log(Sliver, Gold, Platinum);
      
      state.user = state.user.map((e) => {
        if (e.id === id) {
          e.totalSeat += state.totalSeat;
          e.totalAmount += state.totalAmount;
        }
      })
      localStorage.setItem("userData", JSON.stringify(state.user));     

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
      state.totalAmount = 0;
      StoreData(state);
    }
    
  },
});

export const {
  addSeatTimeSlice1,
  saveDataTimeSlice1,
} = TimeSlice1.actions;

export default TimeSlice1.reducer;
