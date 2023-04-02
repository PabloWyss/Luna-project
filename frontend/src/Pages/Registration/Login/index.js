import {InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {
    VerificationDiv,
    VerificationInnerDiv,
    VerificationLeftDiv,
    VerificationRightDiv
} from "../Verification/Verification.style";
import {LoginDiv, LoginInnerDiv} from "./Login.style";

const Login = () => {
    return (
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
    )
}

export default Login