import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";

export default function MovieList() {
    const movieData = useSelector(state  => state.MovieSlice.AddMovieList);
    const {id, name} = useParams();
    return (
        <section className="w-full h-full flex flex-wrap justify-evenly items-center mt-8">
            <h1 className="text-3xl mb-4 font-bold font-sans text-white">RECOMMENDED MOVIES</h1>
            <div className="w-full flex flex-wrap justify-center gap-10">
                {movieData.map((movieList) => {
                    console.log(movieList.movieImg);
                    return (
                        <div key={movieList.id} className="w-[250px] rounded bg-zinc-900 p-2 space-y-1">
                            <img src={movieList.movieImg} alt="" className="rounded" />
                            <h1 className="text-white text-xl">{movieList.movieName}</h1>
                            <p className="text-gray-300">{movieList.movieDate}</p>
                           <Link to={`/userpage/${id}/${name}/${movieList.id}/${movieList.movieName}`}>
                           <button className="text-white  w-full rounded bg-black hover:bg-stone-950">Book Now</button>
                           </Link> 
                        </div>
                    )
                })}
            </div>
        </section>
    )
}