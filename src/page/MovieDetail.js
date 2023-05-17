import React, {useEffect} from 'react';
import {DATA} from "../assets/Data";
import {useParams} from "react-router-dom";
import styled from "styled-components";


const MovieDetail = (props) => {
    const movieRank = useParams()
    const rank = DATA[movieRank.id - 1];
    const total = Number(rank.audience) > 9999 ? Number(rank.audience) / 10000 + "만 명" : rank.audience + "명";


    return (
        <>
            <Wrapper>
                <BgImgBox bgColor={rank.bgColor}>
                    <ImgDiv>
                        <BgImg src={rank.bg} alt={"movieImg"}/>
                    </ImgDiv>
                    <Info>
                        예매순위 {rank.rank} 누적 관객 {total}
                    </Info>
                </BgImgBox>

                <DataBox>
                    <Poster src={rank.img} alt={"movieImg"}/>

                    <TextBox>
                        <Text>
                            <Title>{rank.title}</Title>
                            <YearCountry>{rank.year} · {rank.country}</YearCountry>
                            <hr />
                            <Average>평균 ★ {rank.average}</Average>
                            <hr />
                        </Text>
                    </TextBox>
                </DataBox>
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
  ${props => props.bgColor &&
    `background-color: ${props.bgColor};
          `}
`
const ImgDiv = styled.div`
  width: 600px;
  height: 300px;
  margin: 0 auto;
`
const BgImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Info = styled.div`
  width: 800px;
  height: 33px;
  color: #CECED0;
  font-weight: bold;
  margin: -30px 37%;
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


export default MovieDetail;