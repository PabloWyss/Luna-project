import OrangeButton from "../../../Components/Button";
import {SignUpDiv,
    InputSignInStyle,
    RegistrationContentDiv
    } from "./Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {useState} from "react";

const Registration = () => {
    const [userEmail, setEmail] = useState("");
    const handleEmailInput = (e) => {
    setEmail(e.target.value);
    };

    return (
            <SignUpDiv>
                <RegistrationTitle inputText={'REGISTRATION'}/>
                <RegistrationContentDiv>
                    <form>
                        <InputSignInStyle
                            placeholder="E-Mail Address"
                            type="email"
                            value={userEmail}
                            onChange={handleEmailInput}
                        ></InputSignInStyle >
                    </form>
                    <OrangeButton textInput={'Register'}/>
                </RegistrationContentDiv>
            </SignUpDiv>
    )
}

export default Registration