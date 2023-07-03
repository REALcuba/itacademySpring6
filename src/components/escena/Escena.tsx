import styled from 'styled-components'

const StyledEscena = styled.div < { isactive: boolean } > `
/* color:#BF4F74; */
border-radius: 2rem;
border:1px black solid;
padding:10px;
margin:10px;
display:flex;
justify-content:center;
background: ${({ isactive }) => (isactive ? 'yellow' : 'white')};
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
