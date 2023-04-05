import OrangeButton from "../../../Components/Button";
import {
    SignUpDiv,
    InputSignInStyle,
    RegistrationContentDiv, ButtonRegistrationDiv
} from "./Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import lunaAPI from "../../../Axios/lunaApi";

const Registration = () => {
    const navigate = useNavigate();
    const [userEmail, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        registerUser()
    };

    const registerUser = async () => {
        const data = {
            "email": userEmail
        }
        let response = await lunaAPI.post('/auth/registration/',data)
        try {
            navigate("/registration-message");
        } catch (error) {
            console.log(error)
            alert("Your file is being uploaded!")
        }
      }


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
                    <ButtonRegistrationDiv>
                        <OrangeButton textInput={'Register'} onClickAction={handleRegisterClick}/>
                    </ButtonRegistrationDiv>
                </RegistrationContentDiv>
            </SignUpDiv>
    )
}

export default Registration