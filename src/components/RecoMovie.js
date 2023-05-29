import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const RecoMovie = ({apiResponse}) => {
    const navigate = useNavigate()

    const GoDetailPage = (movieId) => {
        navigate(`/movie/${movieId}`)
    };


    return (
        <>
            {apiResponse && (
                <RecommendMovies>
                    <SectionTitle>추천작</SectionTitle>
                    <ShowMovieWrapper>
                        <MovieWrapper>
                            {apiResponse &&
                                apiResponse.map((movie, index) =>
                                    <MovieBox key={index} onClick={() => GoDetailPage(movie.id)}>
                                        <MoviePoster>
                                            <MovieImg src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}/>
                                        </MoviePoster>
                                        <Title>{movie.title}</Title>
                                        <Star>평균 ★{movie.vote_average}</Star>
                                    </MovieBox>
                                )
                            }
                        </MovieWrapper>
                    </ShowMovieWrapper>
                </RecommendMovies>
            )
            }
        </>
    );
};


export default RecoMovie;

const RecommendMovies = styled.div`
  width: 1300px;
  margin: 10px auto;

`
const ShowMovieWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border: 1px solid #9f9f9f;
  border-radius: 8px;
  background-color: rgba(208, 208, 208, 0.31);
`

const MovieBox = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 5px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.57);
`
const MovieWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-y: scroll;
  cursor: pointer;
`
const MoviePoster = styled.div`
  background-size: cover;
`
const MovieImg = styled.img`
  width: 200px;
  height: 280px;
`
const Title = styled.p`
  font-weight: bold;
  padding: 5px;
`
const Star = styled.p`
  color: #575757;
  padding: 0 5px;
`
const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 30px 20px 0 20px;
  padding: 20px 10px;
`