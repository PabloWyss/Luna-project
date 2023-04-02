import OrangeButton from "../../../Components/Button";
import {SignUpDiv,
    InputSignInStyle,
    RegistrationContentDiv
    } from "./Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [userEmail, setEmail] = useState("");
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handleRegisterClick = () => {
        navigate("/registration-message");
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
                    <OrangeButton textInput={'Register'} onClickAction={handleRegisterClick}/>
                </RegistrationContentDiv>
            </SignUpDiv>
    )
}

export default Registration