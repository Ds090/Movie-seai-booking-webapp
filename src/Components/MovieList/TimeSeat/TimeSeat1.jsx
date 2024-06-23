import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SeatTimeSlice1 from "../Seats/SeatTimeSlice1.jsx";
import { saveDataTimeSlice1 } from "../../../features/TimeSlice1.js";


export default function TimeSeat1() {
  const { id, moviename, name, movieid } = useParams();
  let addSilver = useSelector((state) => state.TimeSlice1.Sliver);
  let addGold = useSelector((state) => state.TimeSlice1.Gold);
  let addPlatinum = useSelector((state) => state.TimeSlice1.Platinum);
  let TotalAmount = useSelector((state) => state.TimeSlice1.totalAmount);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function SaveData() {
    let seatCategory ={
        Sliver: "Sliver",
        Gold: "Gold",
        Platinum: "Platinum",
        id: id,
    }
    if (TotalAmount === 0) {
        alert('Please Select The Seat!')
    }else{
        dispatch(saveDataTimeSlice1(seatCategory));
        navigate(`/userpage/${id}/${name}/${movieid}/${moviename}/seatbooked`);
    }
  }

  return (
    <section className="mt-10 mb-14">
      <div className="w-[430px] ">
        <SeatTimeSlice1
          category="Sliver"
          amount={addSilver.price}
          seat={addSilver.seat}
        />
        <hr className="border border-gray-400 w-[450px]" />
        <SeatTimeSlice1
          category="Gold"
          amount={addGold.price}
          seat={addGold.seat}
        />
        <hr className="border border-gray-400 w-[450px]" />
        <div className="">
          <h1 className="text-center font-bold text-lg"></h1>
          <SeatTimeSlice1
            category="Platinum"
            amount={addPlatinum.price}
            seat={addPlatinum.seat}
          />
        </div>
      </div>
      <div className="bg-[#1a1a1a] flex justify-between p-2 items-center text-white mt-4 rounded">
        <div>
          <p>view Summary</p>
          <h1>{TotalAmount}</h1>
        </div>
        <button
          type="button"
          className="bg-stone-800 py-2 px-4 rounded text-white font-semibold hover:bg-stone-700"
          onClick={SaveData}
        >
          Proceed to Pay
        </button>
      </div>
    </section>
  );
}
