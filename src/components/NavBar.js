import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import serch from "../assets/image/serch.svg";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const NavBar = (props) => {
    const [isMain, setIsMain] = useState(true);
    const {onClick} = props;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        location.pathname === "/" ?
            setIsMain(true)
            : setIsMain(false)
    }, [location]);


    return (
        <Nav isMain={isMain}>
            <Ul>
                <Menus isMain={isMain}>
                    <li><Logo src={logo} onClick={() => navigate("/")}/></li>
                    <Menu>영화</Menu>
                    <Menu>TV</Menu>
                    <Menu>책</Menu>
                    <Menu>웹툰</Menu>
                </Menus>
                <Menus>
                    <SerchBar isMain={isMain}>
                        <SerchLogo src={serch}/>
                        <SerchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."/>
                    </SerchBar>
                    <li>
                        <LoginBtn isMain={isMain} onClick={onClick}>로그인</LoginBtn>
                    </li>
                    <li>
                        <SignBtn isMain={isMain}>회원가입</SignBtn>
                    </li>
                </Menus>
            </Ul>
        </Nav>
    );
};


const Logo = styled.img`
  width: 150px;
  padding-right: 20px;
`
const Nav = styled.nav`
  background-color: ${({isMain}) => isMain ? "white" : "transparent"};
  border: ${({isMain}) => isMain ? "1px solid #EBEBEB" : "none"};
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  top: 0;
  z-index: 100;
`
const Ul = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`
const Menus = styled.div`
  color: ${({isMain}) => isMain ? "#7E7E7E" : "#f1f1f1"};
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Menu = styled.li`
  padding: 5px 15px;
  font-weight: bold;
  margin: 20px auto;
`
const SerchBar = styled.div`
  border: ${({isMain}) => (isMain ? "1px solid #ebebeb" : "none")};
  background-color: ${({isMain}) => (isMain ? "#F5F5F7" : "rgba(255,255,255,0.1)")};
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 23px;
  padding: 5px 10px;
  border: 1px solid #B5B2B2;
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
  color: #2f2f2f;
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
  color: ${({isMain}) => isMain ? "#353535" : "#F1F1F1"}
`
const SignBtn = styled.button`
  background-color: transparent;
  padding: 8px 15px;
  border: solid 1px #eaeaea;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  color: ${({isMain}) => isMain ? "#353535" : "#F1F1F1"};
`


export default NavBar;