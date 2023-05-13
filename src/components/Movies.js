import React from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import {DATA} from "../assets/Data";
import {useNavigate} from "react-router-dom";


const ShowMovieWrapper = styled.div`
  width: 93%;
  margin: 0 20px 20px 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`
const MovieWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-y: scroll;
`


const Movies = (onClickMovie) => {

    const navigate = useNavigate();

    // const onClick = () => {
    //     // navigate("/boards")
    //     console.log("눌림")
    // }








    return (
        <>
            <ShowMovieWrapper>

                <MovieWrapper onclick={onClickMovie}>
                    {DATA.map((movie, index) =>
                        <Movie key={index} movie={movie}/>
                    )}
                </MovieWrapper>


            </ShowMovieWrapper>
        </>
    );
};

export default Movies;


//onClick={onClick}