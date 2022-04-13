import styled from "@emotion/styled";
import tareas from '../styles/tareas.css';  
import BtnEliminar from '../images/icon-cross.svg';

const Contenido = styled.div`
  display: flex;
    align-items: center;
    justify-content: space-between;
    gap:8px;
`;
const ContenidoTexto = styled.p`
color: hsl(236, 33%, 92%);
font-weight: 400;
font-size: 20px;
text-decoration: none;
transition: all .3s ease-in-out;
@media (min-width: 990px){
 margin-left: 8px;
}
`;
const Contenedor = styled.div`
background-color:  hsl(235, 24%, 19%);
    border-bottom: 1px solid  hsl(234, 11%, 52%);
    padding:4px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    transition: all .3s ease-in-out;
    &:first-of-type{
      border-radius: 5px 5px 0 0;
    }
    @media (min-width: 990px){
     max-width:750px;
     margin: 0 auto;
    }
`;

const Tarea = ({tarea, eliminarTarea, setRestantes, restantes, filtro, setFiltro}) => {
  const {tareaNombre, id, estado} = tarea;
 
  const handleTerminada = (id)=>{
   document.querySelector(`[data-t="${id}"]`).classList.toggle('marcar');
   document.querySelector(`[data-t="${id}"]`).parentElement.lastChild.classList.toggle('rayar');
  if(tarea.estado==='activas'){
    tarea.estado='completadas';
    setRestantes(restantes-1);

    //Rgresar a todas cuando se marque una activaen el filtro de marcadas
    if(filtro === 'activas'){
      setFiltro('');
    }

  }else{
    tarea.estado='activas';
    setRestantes(restantes+1);

    //Rgresar a todas cuando se marque una completada en el filtro de activas
    if(filtro === 'completadas'){
      setFiltro('');
    }
  }
 
  }
 
  return (
    <Contenedor>
      <Contenido >
        {
          /*
          lo del estado se hace para que no se pierda el estilo de la clase
          y cuando se pase el filtro a activas no se pierda que estan marcadas
          las completadas
          */
        }
        <div className={`terminada ${estado =='completadas' ? "marcar": ''}`} data-t={id}>
          <input type="checkbox" onClick={()=>handleTerminada(id)}/>
        </div>
      <ContenidoTexto className={`${estado =='completadas' ? "rayar": ''}`}>{tareaNombre}</ContenidoTexto>
        </Contenido>
      <button type="submit"
      onClick={()=>eliminarTarea(id)}> 
      <img src={BtnEliminar} alt="boton eliminar" />
      </button>
    </Contenedor>
  )
}

export default Tarea