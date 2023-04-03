import {InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {
    VerificationDiv,
    VerificationForm,
    VerificationInnerDiv,
    VerificationLeftDiv,
    VerificationRightDiv
} from "./Verification.style";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Verification = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [userLocation, setUserLocation] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    //store typed email
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    //store typed password
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    //store typed repeat password
    const handleRepeatPasswordInput = (e) => {
        setRepeatPassword(e.target.value);
    };

    //store typed username
    const handleUserNameInput = (e) => {
        setUserName(e.target.value);
    };


    //store typed verification code
    const handleVerificationCodeInput = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleLocationInput = (e) => {
        setUserLocation(e.target.value);
    };

    //check if passwords match
    useEffect(() => {
        checkPasswordMatch();
        }, [repeatPassword, userPassword]);

    const checkPasswordMatch = () => {
        if (repeatPassword !== "" && repeatPassword !== userPassword) {
          setPasswordMatch(false);
        } else {
          setPasswordMatch(true);
        }
    };

     const handleSubmitButton = () => {
        navigate("/login")
    }

    return (
        <div>
            <Header/>
            <SignUpDiv>
                <RegistrationTitle inputText={'VERIFICATION'}/>
                    <VerificationForm onSubmit={handleSubmitButton}>
                        <VerificationDiv>
                            <VerificationInnerDiv>
                                <VerificationLeftDiv>
                                    <InputSignInStyle
                                        placeholder="E-Mail Address"
                                        type="email"
                                        value={userEmail}
                                        onChange={handleEmailInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Username"
                                        value={userName}
                                        onChange={handleUserNameInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Password"
                                        type="password"
                                        value={userPassword}
                                        onChange={handlePasswordInput}
                                    />
                                </VerificationLeftDiv>
                                <VerificationRightDiv>
                                    <InputSignInStyle
                                        placeholder="Validation code"
                                        value={verificationCode}
                                        onChange={handleVerificationCodeInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Location"
                                        value={userLocation}
                                        onChange={handleLocationInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Password repeat"
                                        type="password"
                                        value={repeatPassword}
                                        onChange={handleRepeatPasswordInput}
                                    />
                                </VerificationRightDiv>
                            </VerificationInnerDiv>
                            <p>
                                {passwordMatch ? "" : "The passwords don't match"}
                            </p>
                        </VerificationDiv>
                        <OrangeButton textInput={'Finish registration'} type={"submit"}/>
                    </VerificationForm>
            </SignUpDiv>
            <Footer/>
        </div>
    )
}

export default Verification