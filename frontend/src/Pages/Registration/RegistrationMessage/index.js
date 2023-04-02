import {SignUpDiv,
    RegistrationContentDiv
    } from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {RegistrationMessageP} from "./ReguistrationMessage.style";

const RegistrationMessage = () => {

    return (
        <SignUpDiv>
            <RegistrationTitle inputText={'REGISTRATION'}/>
            <RegistrationContentDiv>
                <RegistrationMessageP>
                    Thanks for your registration.
                    Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon.
                    Since monkeys arent good in writing the message could end up in you junk folder.
                    Our apologies for any inconvenience.
                </RegistrationMessageP>
            </RegistrationContentDiv>
        </SignUpDiv>
    )
}

export default RegistrationMessage