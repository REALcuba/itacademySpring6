import { styled } from "styled-components"

const StyledPrevForwardBtn = styled.button`
color:red;
width: 50%;
height: 2.6rem;
marging:10px;

&:hover {
    color:black;
    border: 2px solid black ;
}
`

type BotonesProps = {
    handlePrevious: () => void;
    handleNext: () => void;
}

// }
const PrevForwardBtn: React.FC<BotonesProps> = ({ handlePrevious, handleNext }) => {

    return (
        <div className="btn-container">
            <StyledPrevForwardBtn onClick={handlePrevious}>previous phrase</StyledPrevForwardBtn >
            <StyledPrevForwardBtn onClick={handleNext}>next phrase</StyledPrevForwardBtn>
        </div>
    )
}

export default PrevForwardBtn
