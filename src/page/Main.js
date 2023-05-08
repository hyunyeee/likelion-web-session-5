import styled from "styled-components";
import Modal from "../components/Modal";
import {useState} from "react";
import logo from "../assets/image/icon_logo.png";
import serch from "../assets/image/serch.svg";
import Movies from "../components/Movies";


const Logo = styled.img`
  width: 150px;
  padding-right: 20px;
`
const Nav = styled.nav`
  border: 1px solid #EBEBEB;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
align-items: center;
  background-color: white;
  top: 0;
`
const Ul = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`
const Menus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Menu = styled.li`
  color: #7E7E7E;
  padding: 5px 15px;
  font-weight: bold;
  margin: 20px auto;
`
const SerchBar = styled.div`
  background-color: #F5F5F7;
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 23px;
  padding: 10px;
`
const SerchLogo = styled.img`
  width: 20px;
  padding: 3px;
  cursor: auto;
`
const SerchInput = styled.input`
  width: 240px;
  border: none;
  padding: 5px;
  background-color: transparent;
  font-size: 14px;
  :focus {
    outline: none;
  }
`
const LoginBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`
const SignBtn = styled.button`
  background-color: transparent;
  padding: 8px 15px;
  border: solid 1px #BBBBBD;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`
const Container = styled.div`
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
const Main = () => {
    const [modalIsClicked, setModalIsClicked] = useState(false);
    const onClick = () => {
        setModalIsClicked((prev) => !prev)
    }
    console.log(modalIsClicked)
    return (
        <>
            <header>
                <Nav>
                    <Ul>
                        <Menus>
                            <li><Logo src={logo}/></li>
                            <Menu>영화</Menu>
                            <Menu>TV</Menu>
                            <Menu>책</Menu>
                            <Menu>웹툰</Menu>
                        </Menus>

                        <Menus>
                            <SerchBar>
                                <SerchLogo src={serch}/>
                                <SerchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."/>
                            </SerchBar>
                            <li>
                                <LoginBtn onClick={onClick}>로그인</LoginBtn>
                                {modalIsClicked ? <Modal onClick={onClick}/> : <></>}
                            </li>
                            <li>
                                <SignBtn>회원가입</SignBtn>
                            </li>
                        </Menus>
                    </Ul>
                </Nav>
            </header>

            <Container>
                <Title>박스오피스 순위</Title>
                <Movies/>
            </Container>
        </>
    );
};


export default Main;