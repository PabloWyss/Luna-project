import OrangeButton from "../../../Components/Button";
import {SignUpDiv,
    InputSignInStyle,
    RegistrationContentDiv
    } from "./Signup.style";
import RegistrationTitle from "../RegistrationTitle";

const Signup = () => {

    return (
        <SignUpDiv>
            <RegistrationTitle inputText={'REGISTRATION'}/>
            <RegistrationContentDiv>
                <form>
                    <InputSignInStyle
                        placeholder="E-Mail Address"
                        type="email"
                    ></InputSignInStyle >
                </form>
                <OrangeButton textInput={'Register'}/>
            </RegistrationContentDiv>
        </SignUpDiv>
    )
}

export default Signup