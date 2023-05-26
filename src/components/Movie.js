import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const Movie = (props) => {
    const {movie, rank} = props;
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/movie/${movie.id}`);
    }


    return (
        <>
            <Wrapper onClick={onClick}>
                <Container>
                    <Rank>
                        {rank+1}
                    </Rank>
                    <Poster src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path }/>
                </Container>

                <TextBox>
                    <Title>{movie.title}</Title>
                    <InfoTxt>{movie.release_date.slice(0,4)} · ★{movie.vote_average} </InfoTxt>
                </TextBox>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  position: relative;
  border: 1px solid #eae9e8;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 250px;
  overflow: hidden;
`
const Rank = styled.div`
  position: absolute;
  margin: 5px;
  left: 0;
  border: 1px solid black;
  border-radius: 6px;
  width: 30px;
  height: 30px;

  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 23px;
  line-height: 35px;
`
const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const TextBox = styled.div`
  width: 250px;
  font-weight: bold;
`
const Title = styled.div`
  color: #292A31;
  padding: 4px;
`
const InfoTxt = styled.div`
  color: #32333A;
  font-size: 15px;
  padding: 4px;
`


export default Movie;