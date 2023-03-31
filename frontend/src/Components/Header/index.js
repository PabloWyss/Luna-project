import {
    HeaderButtonLeft, HeaderButtonRight,
    HeaderButtonsDiv,
    HeaderDiv,
    HeaderLeftDiv,
    HeaderLinksDiv,
    HeaderRightDiv
} from "./Header.style";
import logo from "../../Assets/logo.svg"

const Header = () => {

    return (
        <HeaderDiv>
            <HeaderLeftDiv >
                <h1>
                    <img src={logo}/>
                </h1>
            </HeaderLeftDiv >
            <HeaderRightDiv>
                <HeaderLinksDiv>
                    <h2>
                        <a>Home</a>
                    </h2>
                    <h2>
                        <a>Search</a>
                    </h2>
                    <h2>
                        <a>Profile</a>
                    </h2>
                </HeaderLinksDiv>
                <HeaderButtonsDiv>
                    <HeaderButtonLeft>
                        SIGNUP
                    </HeaderButtonLeft>
                    <HeaderButtonRight>
                        LOGIN
                    </HeaderButtonRight>
                </HeaderButtonsDiv>
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;