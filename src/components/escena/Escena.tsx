import styled from 'styled-components'
// import fondo from '../../assets/img/1.jpg'
const StyledEscena = styled.div < { isactive: boolean } > `
/* color:#BF4F74; */
border-radius: 2rem;
border:1px black solid;
padding:10px;
margin:10px;
display:flex;
justify-content:center;
background: ${({ isactive }) => (isactive ? 'yellow' : '#0000005c')};
color: ${({ isactive }) => (isactive ? 'black' : 'white')};
`
type Escena = {
  arr: string[],
  currentIndex: number
}

export const Escena: React.FC<Escena> = ({ arr, currentIndex }) => {
  
  return(
    <ul>
      {
        arr.map((frase, index) =>
        (<StyledEscena key={index} isactive={currentIndex === index}  >
                {frase}
        </StyledEscena >
            )
            )

      }
    </ul>
  )
}
