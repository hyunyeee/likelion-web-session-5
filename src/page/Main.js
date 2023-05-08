import styled from "styled-components";
import Modal from "../components/Modal";
import {useState} from "react";


const LoginBtn = styled.button`
  width: 80px;
  height: 30px;
`


const Main = () => {
    const [modalIsClicked, setModalIsClicked] = useState(false);

    const onClick = () => {
        setModalIsClicked((prev) => !prev)
    }
    console.log(modalIsClicked)


    return (
        <>
            <LoginBtn onClick={onClick}>로그인</LoginBtn>
            {modalIsClicked ? <Modal/> : <></>}
        </>
    );
};


export default Main;