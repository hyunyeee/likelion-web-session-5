import styled from "styled-components";
import logo from "../assets/image/icon_logo.png"
import google from "../assets/image/icon_google.png"
import kakao from "../assets/image/icon_kakao.png"
import line from "../assets/image/icon_line.png"
import twitter from "../assets/image/icon_twitter.png"
import apple from "../assets/image/icon_apple.png"


const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`
const ModalWrapper = styled.div`
  background-color: #FFFFFF;
  width: 375px;
  height: 634px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
`
const Logo = styled.img`
  margin: 20px auto 0 auto;
  width: 198px;
`
const LogIn = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`
const Form = styled.form`
  width: 335px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SignupBtn = styled.button`
  color: #FF4E80;
  background-color: transparent;
  border: none;
  font-size: 100%;
  font-weight: bold;
`
const Input = styled.input`
  background-color: #F5F5F5;
  color: #A3A3A3;
  height: 44px;
  border: none;
  border-radius: 8px;
  margin: 5px 0;
  padding-left: 10px;
  font-size: 15px;
`
const SubmitBtn = styled.button`
  background-color: #FF2F6E;
  border-radius: 8px;
  border: 0;
  margin: 15px 0;
  width: 335px;
  height: 44px;
  color: #FFF;
`
const Text = styled.a`
  color: #8E8E8E;
  font-weight: bold;
  justify-content: center;
`
const Messages = styled.div`
  margin-bottom: 30px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Line = styled.div`
  border-top: solid 1px #8E8E8E;
  width: 150px;
  height: 0;
`
const Icons = styled.div`
  width: 300px;
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
`
const SocialIcon = styled.img`
  width: 50px;
`
const OR = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Msg = styled.div`
  background-color: #F7F7F7;
  width: 309px;
  height: 46px;
  padding-top: 13px;
  text-align: center;
`


const Modal = (props) => {

    const {onClick} = props;

    return (
        <>
            <Wrapper>
                <ModalWrapper>
                    <button onClick={onClick}>X</button>
                    <Logo src={logo} alt={"logo"}/>
                    <LogIn>로그인</LogIn>
                    <Form>
                        <Input placeholder={`이메일`}/>
                        <Input placeholder={`비밀번호`}/>
                        <SubmitBtn>로그인</SubmitBtn>
                    </Form>

                    <Messages>
                        <SignupBtn>비밀번호를 잊어버리셨나요?</SignupBtn>
                        <div>
                            <Text>계정이 없으신가요?</Text><SignupBtn>회원가입</SignupBtn>
                        </div>

                        <OR>
                            <Line/>
                            <Text>OR</Text>
                            <Line/>
                        </OR>
                    </Messages>

                    <Icons>
                        <SocialIcon src={kakao}/>
                        <SocialIcon src={google}/>
                        <SocialIcon src={twitter}/>
                        <SocialIcon src={apple}/>
                        <SocialIcon src={line}/>
                    </Icons>

                    <Msg>
                        TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
                    </Msg>
                </ModalWrapper>
            </Wrapper>

        </>
    )
};


export default Modal;