import {ButtonRegistrationDiv, InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {LoginDiv, LoginInnerDiv} from "./Login.style";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import {useState} from "react";

const Login = () => {

    const [userUsername, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

      //store typed email
    const handleUsernameInput = (e) => {
        setEmail(e.target.value);
    };

    //store typed password
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };



    return (
        <div>
            <Header/>
            <SignUpDiv>
                <RegistrationTitle inputText={'LOGIN'}/>
                <LoginDiv>
                    <form>
                        <LoginInnerDiv>
                            <InputSignInStyle
                                placeholder="Username"
                                value={userUsername}
                                onChange={handleUsernameInput}
                            />
                            <InputSignInStyle
                                placeholder="Password"
                                type="password"
                                value={userPassword}
                                onChange={handlePasswordInput}
                            />
                        </LoginInnerDiv>
                    </form>
                    <ButtonRegistrationDiv>
                        <OrangeButton textInput={'Login'}/>
                    </ButtonRegistrationDiv>
                </LoginDiv>
            </SignUpDiv>
            <Footer/>
        </div>
    )
}

export default Login