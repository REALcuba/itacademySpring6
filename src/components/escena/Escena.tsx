// import React from 'react'
// import  {phraseArray} from "../../assets/PhrasesArray";

// type arr={arr:string}
type arr={arr:string[]}
const Escena = (props:arr) => {
  console.log(props.arr);
  
  return(
    <ul>
        {
         props.arr.map((frase)=> 
                (<li>
                {frase}
                </li>
            )
            )

        }
    </ul>
  )
}

export default Escena
