import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId.id + "/videos?language=en-US", API_OPTIONS);
        
        const json = await data.json();
        const filterMovie = json.results?.filter((video) => video.type == "Trailer");
        const ifNoVideo = filterMovie?.length ? filterMovie[0] : json.results[0];
        dispatch(addMovieTrailer(ifNoVideo))
    }
    useEffect(() => {
        getMovieTrailer();
    }, [])
}
export default useMovieTrailer;