import {SignUpDiv,
    RegistrationContentDiv
    } from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {RegistrationMessageP} from "./ReguistrationMessage.style";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import OrangeButton from "../../../Components/Button";
const RegistrationMessage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate('/verification')
        }, 10000)
    }, [])

    return (
        <div>
            <Header/>
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
            <Footer/>
        </div>

)
}

export default RegistrationMessage