import React, {useState, Fragment} from 'react';


const Lista = () => {
     
    const [arrayNumero, setarrayNumero]= useState([1,2,3,4])
    const[numero, setNumero]= useState(5)

    const agregarElemento = () => {
        setNumero(numero + 1)
        console.log("click")
        setarrayNumero([...arrayNumero, numero])
    }

    return ( 
        <Fragment>
             <h3>Lista</h3>
             <button onClick={agregarElemento}>Agregar</button>
             {
                 arrayNumero.map((item, index) =>
                    <p key={index}>{item}- {index} </p>
                    )
             }
        </Fragment>
     );
}
 
export default Lista;