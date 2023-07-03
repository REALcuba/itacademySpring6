import styled from 'styled-components'

const StyledEscena = styled.div < { isactive: boolean } > `
/* color:#BF4F74; */
border-radius: 2rem;
border:1px black solid;
padding:10px;
margin:10px;
display:flex;
justify-content:center;
background: ${({ isactive }) => (isactive ? 'yellow' : '#0000005c')};
color: ${({ isactive }) => (isactive ? 'black' : 'gold')};
`
type arr = {
  text: string;
  img: string;
}[]

type Escena = {
  arr: arr;
  currentIndex: number,
}

export const Escena: React.FC<Escena> = ({ arr, currentIndex }) => {
  
  return(
    <ul>
      {
        arr.map((arr, index: number) =>
        (<StyledEscena key={index} isactive={currentIndex === index}  >
          {arr.text}
        </StyledEscena >
          )
        )
      }
    </ul>
  )
}
