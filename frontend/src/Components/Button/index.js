import {OrangeButtonStyle} from "./OrangeButton.style";

const OrangeButton = ({textInput, onClickAction}) =>{

    return (
        <OrangeButtonStyle onClick={onClickAction}>
            {textInput}
        </OrangeButtonStyle>
    )
}

export default OrangeButton