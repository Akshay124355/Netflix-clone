import React from 'react'
import { CARD_IMG } from "../../utils/constants"

const MovieCard = (postarPath) => {
    return (
        <div className='w-40 m-2'>
            <img src={CARD_IMG + postarPath.posterPath} alt="Movie-Poster" />
        </div>
    )
}

export default MovieCard