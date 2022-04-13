import { useState,useEffect } from 'react'
import generarId from './helpers/generarId';
import Header from './components/Header';
import ListadoTareas from './components/ListadoTareas';

function App() {
 const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('todo')) ?? []);
 const [filtro, setFiltro] = useState('');
 const [tareasFiltradas, setTareasFiltradas] = useState([]);
 const [ligthMode, setLigthMode] = useState( Boolean(localStorage.getItem('modo')) ?? false);
 const [error, setError] = useState(false);
 //Determinar cuantas tareas faltan
 const [restantes, setRestantes] = useState(0);
 useEffect(()=>{
     //guardar Tareas
     localStorage.setItem('todo', JSON.stringify(tareas));
 }, [restantes]);

 //Checar cuantas tareas hay en el arreglo para determinar su total
 useEffect(()=>{
   //guardar Tareas
   localStorage.setItem('todo', JSON.stringify(tareas));
   setRestantes(tareas.filter(tarea=>tarea.estado==="activas").length);
 }, [tareas])
 useEffect(()=>{

  //Verificamos que se haya aplicado un filtro
   if(filtro){
    const filtradas = tareas.filter(tarea=>tarea.estado===filtro);
    setTareasFiltradas(filtradas);
   }
 }, [filtro])
const guardarTarea = tarea =>{
  tarea.id = generarId();
  tarea.estado='activas';
  setTareas([...tareas, tarea]);
}
const eliminarTarea = id =>{
  const tareasActualizado = tareas.filter(tarea => tarea.id !== id );
  setTareas(tareasActualizado);
  if(filtro){
    //Cuando nos encontremps en un filtro que tambien de el
    //efecto de que se elimina de ahi para que no
    //tenga que volver a todos y ahi se vea que se elimino
    //pq si se queda en filtrados y le da en eliminar no se eliminaba
    const FiltradosActualizados = tareasFiltradas.filter(tarea => tarea.id !== id);
    setTareasFiltradas(FiltradosActualizados);
  }
}
//Para que cheque que modo tendra el body
useEffect(()=>{
if(ligthMode === true){
document.querySelector('body').classList.add('ligth');
localStorage.setItem('modo', 'true');
}else{
  document.querySelector('body').classList.remove('ligth');
  localStorage.removeItem('modo');
}

}, [ligthMode]);
  return (
    <>
      <Header 
      guardarTarea = {guardarTarea} 
      setLigthMode={setLigthMode} 
      ligthMode={ligthMode}
      error={error}
      setError={setError}
      />
      <ListadoTareas 
      tareas={tareas} 
      eliminarTarea={eliminarTarea}
      setFiltro={setFiltro}
      filtro={filtro}
      setTareasFiltradas={setTareasFiltradas}
      tareasFiltradas={tareasFiltradas}
      setTareas={setTareas}
      restantes={restantes}
      setRestantes={setRestantes}
      />
      <footer className="attribution">
     <p> 
     Challenge by {' '}
       <a href="https://www.frontendmentor.io?ref=challenge"
        target="_blank">Frontend Mentor</a> </p>
      <p>Coded by <a href="https://github.com/JJM3RLIN?tab=repositories">M3RLIN</a></p>
    </footer>
    </>
  )
}

export default App
