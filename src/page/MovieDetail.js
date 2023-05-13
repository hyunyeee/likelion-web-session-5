import React from 'react';
import {DATA} from "../assets/Data";
import {useParams} from "react-router-dom";

const MovieDetail = () => {

    const movieRank = useParams()

    console.log(movieRank)

    return (
        <>
            무비 디테일 {movieRank.id}
            {DATA[movieRank]}
        </>
    );
};

export default MovieDetail;