//Para ordenar los div
import { ReactSortable } from "react-sortablejs";
import Tarea from './Tarea';
import LimpiarTareas from './LimpiarTareas';
import Filtro from './Filtro';
import styled from '@emotion/styled';
const ContenidoTareas = styled.h2`
color:hsl(234, 11%, 52%);
font-weight: 700;
font-size: 25px;
text-align:center;
transition: all .3s ease-in-out;
@media (min-width: 990px){
 font-size: 35px;
 text-align:left;
 margin-left: 50px;
}
`;
const Ordenar = styled.p`
text-align:center;
color:hsl(234, 11%, 52%);
`;
const ListadoTareas = ({tareas, setTareas, 
  eliminarTarea, 
  filtro, 
  setFiltro, setTareasFiltradas, 
  tareasFiltradas, restantes, setRestantes}) => {
  
  return (
    <div className='contenedor'>
      <ContenidoTareas>{tareas.length > 0 ? `Tareas ${filtro}:` : 'Aún no tienes tareas'}</ContenidoTareas>
      <ReactSortable list={tareas} setList={setTareas} animation={"150"} sort={true}>
      {
        filtro ?
        tareasFiltradas.map(tarea =>(
          <Tarea key={tarea.id} 
          tarea={tarea} 
          eliminarTarea={eliminarTarea} 
          setRestantes={setRestantes}
          restantes={restantes}
          filtro={filtro}
          setFiltro={setFiltro}
        />
      ))
      :
      tareas.map(tarea =>(
        <Tarea key={tarea.id} 
        tarea={tarea} 
        eliminarTarea={eliminarTarea} 
        setRestantes={setRestantes}
        restantes={restantes}
        />
     
    ))
      }
    </ReactSortable>
      {
       tareas.length > 0 && 
       <LimpiarTareas 
       restantes={restantes} 
       tareas={tareas} filtro={filtro} 
       setTareas={setTareas}
       setTareasFiltradas={setTareasFiltradas}
       tareasFiltradas={tareasFiltradas}
       />
      }
  {
    //Botones que nos filtran las tareas
    tareas.length > 0 && <Filtro filtro={filtro} setFiltro={setFiltro} /> 
  }
  <Ordenar>Arrastra y suelta una tarea para ordenarla</Ordenar>
    </div>
  )
}

export default ListadoTareas