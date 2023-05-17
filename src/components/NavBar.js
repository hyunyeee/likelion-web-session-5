import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import serch from "../assets/image/serch.svg";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const NavBar = (props) => {
    const [isMain, setIsMain] = useState(true);
    const {onClick} = props;
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            setIsMain(true)
        }else {
            setIsMain(false)
        }
    }, [location]);
    const navigate = useNavigate();


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
                        <SerchLogo src={serch} />
                        <SerchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."/>
                    </SerchBar>
                    <li>
                        <LoginBtn isMain={isMain} onClick={onClick}>로그인</LoginBtn>
                    </li>
                    <li>
                        <SignBtn isMain={isMain} >회원가입</SignBtn>
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
  background-color: transparent;
  ${props => props.isMain &&
    `background-color: white;
          `}
  border: none;
  ${props => props.isMain &&
    `border: 1px solid #EBEBEB;
          `}
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
  color: #BBBBBE;

  ${props => props.isMain &&
    `color: #7E7E7E;
          `}
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
  background-color: transparent;

  ${props => props.isMain &&
    `background-color: #F5F5F7;
          `}
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 23px;
  padding: 5px 10px;
  border: 1px solid #B5B2B2;
  ${props => props.isMain &&
    `border: none;
          `}
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
  color: #C4C1C2;
  
  ${props => props.isMain &&
    `color: #353535;
          `}
`
const SignBtn = styled.button`
  background-color: transparent;
  padding: 8px 15px;
  border: solid 1px #BBBBBD;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  color: #C4C1C2;
  ${props => props.isMain &&
    `color: #353535;
          `}
`

export default NavBar;