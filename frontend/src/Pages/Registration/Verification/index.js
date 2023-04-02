import {InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {VerificationDiv, VerificationInnerDiv, VerificationLeftDiv, VerificationRightDiv} from "./Verification.style";

const Verification = () => {
    return (
        <SignUpDiv>
            <RegistrationTitle inputText={'VERIFICATION'}/>
            <VerificationDiv>
                <form>
                    <VerificationInnerDiv>
                        <VerificationLeftDiv>
                            <InputSignInStyle
                                placeholder="E-Mail Address"
                                type="email"
                            />
                            <InputSignInStyle
                                placeholder="Username"
                            />
                            <InputSignInStyle
                                placeholder="Password"
                                type="password"
                            />
                        </VerificationLeftDiv>
                        <VerificationRightDiv>
                            <InputSignInStyle
                                placeholder="Validation code"
                            />
                            <InputSignInStyle
                                placeholder="Location"
                            />
                            <InputSignInStyle
                                placeholder="Password repeat"
                                type="password"
                            />
                        </VerificationRightDiv>
                    </VerificationInnerDiv>
                </form>
                <OrangeButton textInput={'Finish registration'}/>
            </VerificationDiv>
        </SignUpDiv>
    )
}

export default Verification