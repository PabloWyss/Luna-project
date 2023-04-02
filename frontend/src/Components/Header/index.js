import {
    HeaderButtonLeft, HeaderButtonRight,
    HeaderButtonsDiv,
    HeaderDiv,
    HeaderLeftDiv,
    HeaderLinksDiv,
    HeaderRightDiv
} from "./Header.style";
import logo from "../../Assets/logo.svg"
import {NavLink, useNavigate} from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const handleClickSignUp = () => {
        navigate(`/registration`)
    }
    const handleClickLogin = () => {
        navigate(`/login`)
    }

    return (
        <HeaderDiv>
            <HeaderLeftDiv >
                <img src={logo}/>
            </HeaderLeftDiv >
            <HeaderRightDiv>
                <HeaderLinksDiv>
                    <NavLink
                        to="/home_page"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "black",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "2px solid #E47D31",
                          height: "100%",
                        }
                      : { textDecoration: "none",
                            color: "black",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to="/restaurants"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "black",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "2px solid #E47D31",
                          height: "100%",
                        }
                      : { textDecoration: "none",
                            color: "black",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Search</p>
                    </NavLink>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "black",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "2px solid #E47D31",
                          height: "100%",
                        }
                      : { textDecoration: "none",
                            color: "black",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Profile</p>
                    </NavLink>
                </HeaderLinksDiv>
                <HeaderButtonsDiv>
                    <HeaderButtonLeft onClick={handleClickSignUp}>
                        SIGNUP
                    </HeaderButtonLeft>
                    <HeaderButtonRight onClick={handleClickLogin}>
                        LOGIN
                    </HeaderButtonRight>
                </HeaderButtonsDiv>
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;