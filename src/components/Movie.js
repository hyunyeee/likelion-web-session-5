import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const Movie = (props) => {
    const {movie} = props;
    const total = Number(movie.audience) > 9999 ? Number(movie.audience) / 10000 + "만 명" : movie.audience + "명";
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/movie/${movie.rank}`);
    }


    return (
        <>
            <Wrapper onClick={onClick}>
                <Container>
                    <Rank>
                        {movie.rank}
                    </Rank>
                    <Poster src={movie.img}/>
                </Container>

                <TextBox>
                    <Title>{movie.title}</Title>
                    <YearCountry>{movie.year} · {movie.country}</YearCountry>
                    <Average>평균 ★ {movie.average}</Average>
                    <People>예매율{movie.percent} · 누적 관객 {total}</People>
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
const YearCountry = styled.div`
  color: #32333A;
  font-size: 15px;
  padding: 4px;
`
const Average = styled.div`
  color: #545765;
  font-size: 15px;
  padding: 4px;
`
const People = styled.div`
  color: #74747A;
  font-size: 13px;
  padding: 4px;
`

export default Movie;