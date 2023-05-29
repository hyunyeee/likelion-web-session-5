import styled from "styled-components";
import Modal from "../components/Modal";
import {useEffect, useState} from "react";
import Movies from "../components/Movies";
import {useNavigate} from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import {useRecoilState} from "recoil";
import {apiResponseAtom} from "../atom/atom";


const Main = () => {
    const [modalIsClicked, setModalIsClicked] = useState(false);
    const onClick = () => {
        setModalIsClicked((prev) => !prev)
    }
    const [apiResponse, setApiResponse] = useRecoilState(apiResponseAtom);
    const navigate = useNavigate();


    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
        };
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=ko-KR`,
            options
        )
            .then(function (response) { // 성공했을 때
                setApiResponse(response.data.results)
            })
            .catch(function (error) { // 실패했을 때
                console.log(error);
            });
    }, []);

    useEffect(() => {
        console.log(apiResponse)
    }, [apiResponse])


    return (
        <>
            <header>
                <NavBar onClick={onClick}/>
            </header>

            <Wrapper>
                <>
                    <Title>박스오피스 순위</Title>
                    <Movies
                        onClickMovie={(item) => {
                            navigate(`/movie/${item.id}`);
                        }}
                    />
                    {modalIsClicked && <Modal onClick={onClick}/>}
                </>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  margin: 66px auto;
  width: 90%;
`
const Title = styled.p`
  margin: auto 20px;
  padding: 40px 20px 0 20px;
  font-size: 22px;
  font-weight: bold;
  color: #292a32
`


export default Main;