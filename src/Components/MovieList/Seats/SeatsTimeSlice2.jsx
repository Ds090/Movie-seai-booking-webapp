/* eslint-disable react/prop-types */

import { useDispatch} from "react-redux";
import { addSeatTimeSlice2 } from "../../../features/LoginPage/TimeSlice2";

// eslint-disable-next-line no-unused-vars
export default function SeatTimeSlice2({category, amount, seat}) {
  let dispatch = useDispatch();
 

  function handleClick(id) {
    let data = {
        id: id,
        category: category
    }
    dispatch(addSeatTimeSlice2(data));
  }

  return (
    <>
      <div className="w-[450px]">
        <h1 className="text-center font-bold text-lg">{category} : {amount} ₹ </h1>
        {seat.map((e) => {
          return (
            <button
              key={e.id}
              type="button"
              className={
                e.booked
                  ? `appearance-none m-2 p-3 rounded bg-red-600` 
                  : e.isSelect ? 'appearance-none m-2 p-3 rounded shadow-inner' : `appearance-none m-2 p-3 rounded bg-stone-500 cursor-${e.booked ? 'not-allowed' : 'pointer'}`
              }
              onClick={() => !e.booked && handleClick(e.id)}
            />
          );
        })}
        
      </div>
    </>
  );
}
