import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  align-items: center;
`
const Container = styled.div`
  position: relative;
  
  border: 1px solid #eae9e8;
  border-radius: 8px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;

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

const Img = styled.div`
  margin: 10px;
  //border: 1px solid black;
  width: 210px;
  height: 300px;
`

const Poster = styled.img`
  width: 100%;
  height: 100%;

`

const TextBox = styled.div`
  border: 1px solid black;
  width: 230px;
`


const Movie = (props) => {
    const {data} = props;


    console.log(data[0].img)

    return (
        <>
            <Wrapper>
                <Container>
                    <Rank>
                        {data[0].rank}
                    </Rank>
                    <Img>
                        <Poster src={data[0].img} />
                    </Img>
                </Container>

                <TextBox>
                    <p>{data[0].title}</p>
                    <p>{data[0].year}</p>
                    <p>{data[0].country}</p>
                    <p>평균 . {data[0].average}</p>
                    <p>예매율{data[0].percent} . </p>
                    <p>누적 관객{data[0].audience}</p>


                </TextBox>

            </Wrapper>

        </>
    );
};

export default Movie;