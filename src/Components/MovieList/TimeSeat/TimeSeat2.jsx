import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { saveDataTimeSlice2 } from "../../../features/LoginPage/TimeSlice2.js";
import SeatTimeSlice2 from "../Seats/SeatsTimeSlice2.jsx";

export default function TimeSeat2() {
  const { id, moviename, name, movieid } = useParams();
  let addSilver = useSelector((state) => state.TimeSlice2.Sliver);
  let addGold = useSelector((state) => state.TimeSlice2.Gold);
  let addPlatinum = useSelector((state) => state.TimeSlice2.Platinum);
  let TotalAmount = useSelector((state) => state.TimeSlice2.totalAmount);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function SaveData() {
    let seatCategory ={
      Sliver: "Sliver",
      Gold: "Gold",
      Platinum: "Platinum"
  }
    dispatch(saveDataTimeSlice2(seatCategory));
    navigate(`/userpage/${id}/${name}/${movieid}/${moviename}/seatbooked`);
  }

  return (
    <section className="mt-10 mb-14">
      <div className="w-[430px] ">
        <SeatTimeSlice2
          category="Sliver"
          amount={addSilver.price}
          seat={addSilver.seat}
        />
        <hr className="border border-gray-400 w-[450px]" />
        <SeatTimeSlice2
          category="Gold"
          amount={addGold.price}
          seat={addGold.seat}
        />
        <hr className="border border-gray-400 w-[450px]" />
        <div className="">
          <h1 className="text-center font-bold text-lg"></h1>
          <SeatTimeSlice2
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
