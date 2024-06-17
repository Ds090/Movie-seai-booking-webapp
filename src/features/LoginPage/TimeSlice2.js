import { createSlice } from "@reduxjs/toolkit";

function loadStateData() {
  try {
    const serializedData = localStorage.getItem("seatBookingDataTimeSlice2");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
}

function StoreData(state) {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem("seatBookingDataTimeSlice2", serializedData);
  } catch (err) {
    console.log(err);
  }
}

const initialState = loadStateData() || {
  Sliver: {
    seat: Array.from({ length: 77 }, (_, i) => ({
      id: i + 1,
      isSelect: false,
      booked: false,
    })),
    price: 180,
    countSeat: 0,
  },
  Gold: {
    seat: Array.from({ length: 77 }, (_, i) => ({
      id: i + 1,
      isSelect: false,
      booked: false,
    })),
    price: 250,
    countSeat: 0,
  },

  Platinum: {
    seat: Array.from({ length: 55 }, (_, i) => ({
      id: i + 1,
      isSelect: false,
      booked: false,
    })),
    price: 350,
    countSeat: 0,
  },
  totalAmount: 0,
};

export const TimeSlice2 = createSlice({
  name: "TimeSlice2",
  initialState,
  reducers: {
    addSeatTimeSlice2: (state, action) => {
      let Id = action.payload.id;
      let category = action.payload.category;
      console.log(Id);
      const seat = state[category].seat.find((e) => e.id === Id);

      if (seat) {
        seat.isSelect = !seat.isSelect;

        if (seat.isSelect) {
          state.totalAmount += state[category].price;
          state[category].countSeat += 1;
        } else {
          state.totalAmount -= state[category].price;
          state[category].countSeat -= 1;
        }
      }
    },
    saveDataTimeSlice2: (state, action) => {
      state.totalAmount = 0;
      let Sliver = action.payload.Sliver;
      let Gold = action.payload.Gold;
      let Platinum = action.payload.Platinum;

      console.log(Sliver, Gold, Platinum);

      state[Sliver].seat.forEach((seat) => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      state[Gold].seat.forEach((seat) => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      state[Platinum].seat.forEach((seat) => {
        if (seat.isSelect) {
          seat.booked = true;
          seat.isSelect = false;
        }
      });
      StoreData(state);
    },
  },
});

export const { addSeatTimeSlice2, saveDataTimeSlice2 } = TimeSlice2.actions;

export default TimeSlice2.reducer;
