import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = (movieId) => {

  const movieTrailer = useSelector(store => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen min-h-full aspect-video"
        src={"https://www.youtube.com/embed/pDak4qLyF4Q?si=" + movieTrailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground