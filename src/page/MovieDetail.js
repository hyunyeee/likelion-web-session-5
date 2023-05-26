import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loadingLogo from "../assets/image/loadingLogo.svg"


const MovieDetail = () => {
    const { id } = useParams()
    const [isLoding, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState([]);
    const [releaseDate, setReleaseDate] = useState("");

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
        };
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR&page=1`,
            options
        )
            .then(function (response) { // 성공했을 때
                setMovieData(response.data)
                setIsLoading(true)
            })
            .catch(function (error) { // 실패했을 때
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (movieData.length !== 0) {
            const slicedReleaseDate = movieData.release_date.slice(0, 4);
            setReleaseDate(slicedReleaseDate);
        }
    }, [movieData]);


    return (
        <>
            <Wrapper>

                {isLoding ?
                    <>
                        <BgImgBox />
                        <DataBox>
                            <Poster src={`https://image.tmdb.org/t/p/w500`+ movieData.poster_path} alt={"movieImg"}/>
                            <TextBox>
                                <Text>
                                    <Title>{movieData.title}</Title>
                                    <YearCountry>{releaseDate}</YearCountry>
                                    <hr />
                                    <Average>평균 ★ {movieData.vote_average}</Average>
                                    <hr />
                                    <TxTBox>
                                        {movieData.overview}
                                    </TxTBox>
                                </Text>
                            </TextBox>
                        </DataBox>
                    </>
                    :
                    <Loading src={loadingLogo} />
                }

            </Wrapper>
        </>
    );
};


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
const BgImgBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #cecbcb;
`
const TxTBox = styled.div`
  width: 500px;
  height: auto;
  line-height: 1.5;
`
const DataBox = styled.div`
  width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 50px 70px;
  display: flex;
  flex-direction: row;
`
const Poster = styled.img`
  width: 200px;
  height: 300px;
  display: block;
  top: 0;
  margin: -70px 0;
  border-radius: 4px;
`
const Text = styled.div`
  width: 100%;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #292a32
`
const YearCountry = styled.p`
  font-size: 19px;
`
const Average = styled.p`
  font-size: 19px;
`
const TextBox = styled.div`
  width: 100%;
  height: 100%;
`
const Loading = styled.img`
  width: 400px;
  height: 400px;
  display: block;
  margin: 15% auto;
`


export default MovieDetail;