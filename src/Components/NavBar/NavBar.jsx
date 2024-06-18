/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Img from '../MovieList/th3.jpeg'
export default function NavBar({UserName}) {
  return (
    <nav className="w-full h-[60px] flex justify-between items-center px-3 border-b">
      <img src={Img} alt="" className="w-[80px] h-[40px] rounded-md border-black border"/>
      <h1 className="text-xl font-semibold text-black fons">{UserName}</h1>
    </nav>
  );
}
