import {InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {LoginDiv, LoginInnerDiv} from "./Login.style";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Login = () => {
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
                            />
                            <InputSignInStyle
                                placeholder="Password"
                                type="password"
                            />
                        </LoginInnerDiv>
                    </form>
                    <OrangeButton textInput={'Login'}/>
                </LoginDiv>
            </SignUpDiv>
            <Footer/>
        </div>
    )
}

export default Login