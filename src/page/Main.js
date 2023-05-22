import styled from "styled-components";
import Modal from "../components/Modal";
import {useState} from "react";
import Movies from "../components/Movies";
import {useNavigate} from "react-router-dom";
import NavBar from "../components/NavBar";


const Main = () => {
    const [modalIsClicked, setModalIsClicked] = useState(false);
    const onClick = () => {
        setModalIsClicked((prev) => !prev)
        console.log("로그인")
    }
    const navigate = useNavigate();


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