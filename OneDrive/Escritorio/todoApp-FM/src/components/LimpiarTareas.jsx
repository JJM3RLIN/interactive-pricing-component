import styled from "@emotion/styled"
const ContenedorLimpiar = styled.div `
    background-color:  hsl(235, 24%, 19%);
    padding:4px 20px;
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    color: hsl(234, 11%, 52%);
   font-weight: 400;
   transition: all .3s ease-in-out;
   @media (min-width: 1200px){
    max-width: 750px;
   margin: 0 auto;
   p{
     font-size: 17px;
   }
   }
`;
const BtnLimpiar = styled.button`
color:hsl(234, 11%, 52%);
font-size: 15px;
font-weight: 400;
transition: all .3s ease-in-out;
&:hover{
  color: hsl(220, 98%, 61%);
}
@media (min-width: 990px){
 font-size: 17px
}
`;
const LimpiarTareas = ({restantes, tareas, 
  filtro, setTareasFiltradas, 
  setTareas, tareasFiltradas}) => {
  const eliminarCompletadas= ()=>{
    //Arreglo temporal para guardar los elementos NO completados
    let tmp = [];
    if(filtro === 'completadas'){
     tmp = tareasFiltradas.filter(tarea=>tarea.estado !== 'completadas');
     setTareasFiltradas(tmp);
    }
    tmp = tareas.filter(tarea=>tarea.estado !== 'completadas');
    setTareas(tmp);
  }
  return (
    <ContenedorLimpiar>
   <p>{`${restantes} ${restantes == 1 ? "tarea restante" : "tareas restantes"}`} </p>
   <BtnLimpiar onClick={eliminarCompletadas}>Limpiar tareas completadas</BtnLimpiar>
    </ContenedorLimpiar>
  )
}

export default LimpiarTareas