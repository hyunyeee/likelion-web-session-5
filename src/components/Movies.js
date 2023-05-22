import React, {useState} from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import {useEffect} from "react";


const Movies = (onClickMovie) => {

    const [movieData, setMovieData] = useState([]);


    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
        };
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
            options
        )
            .then(function (response) { // 성공했을 때
                setMovieData(response.data.results)
            })
            .catch(function (error) { // 실패했을 때
                console.log(error);
            });

    }, []);


    return (
        <>
            <ShowMovieWrapper>
                <MovieWrapper onclick={onClickMovie}>
                    {movieData.map((movie, index) =>
                        <Movie key={index} rank={index} movie={movie} />
                    )}
                </MovieWrapper>
            </ShowMovieWrapper>
        </>
    );
};

export default Movies;


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
  cursor: pointer;
`