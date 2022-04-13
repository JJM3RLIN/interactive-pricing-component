import { useState } from 'react';
import tareas from '../styles/tareas.css';
import Error from "./Error";
import styled from '@emotion/styled';
const Formulario = styled.form`
background-color:  hsl(235, 24%, 19%);
padding: 4px 10px;
border-radius: 5px;
display: flex;
align-items:center;
@media (min-width: 990px){
   max-width: 750px;
   margin: 0 auto;
   padding-left: 30px;
}
`;
const Texto =styled.input`
background-color:  hsl(235, 24%, 19%);
color:hsl(236, 33%, 92%);
padding:10px;
border:none;
&:focus{
  border:none;
  outline:transparent;
}

@media (min-width: 990px){
 font-size: 21px;
 width:90%;
}
`;
const NuevaTarea = ({guardarTarea, error, setError}) => {
  const [tareaNombre, setTareaNombre] = useState('');

  const addTarea = (e) =>{
    e.preventDefault();
    if(tareaNombre === ''){
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return
    }
     //Agregarle fondo al boton
     document.querySelector("#addTarea").classList.add('marcar');
     guardarTarea({tareaNombre})
     setTareaNombre('');
     setTimeout(() => {
       document.querySelector("#addTarea").classList.remove('marcar');
     }, 600);
  }
  return (
    <>
    {error && <Error />}
    <Formulario onSubmit={addTarea}>
      <button id='addTarea' className="terminada"></button>
      <Texto 
      type="text" 
      placeholder="Crea una nueva tarea..." 
      value={tareaNombre}
      onChange={(e)=>setTareaNombre(e.target.value)}
      />
    </Formulario></>
  )
}

export default NuevaTarea