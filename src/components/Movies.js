import React from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import {DATA} from "../assets/Data";

const MovieWrapper = styled.div`

  width: 90%;
  margin: 20px;
  border: 1px solid #ffb9b9;
  padding: 10px;
`

//todo map함수로 Movie 뿌리기


const Movies = () => {
    return (
        <>
            <MovieWrapper>

                <Movie data={DATA}/>



            </MovieWrapper>
        </>
    );
};

export default Movies;