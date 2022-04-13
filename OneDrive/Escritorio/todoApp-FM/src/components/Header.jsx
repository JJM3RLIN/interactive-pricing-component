import NuevaTarea from './NuevaTarea';
import  IconoSol from '../images/icon-sun.svg'
import  IconoLuna from '../images/icon-moon.svg'
import Bg from '../images/bg-desktop-dark.jpg'
import styled from '@emotion/styled';
import HeaderTodo from '../styles/header-todo.css';
import BgDark from '../images/bg-desktop-dark.jpg'
const HeaderS = styled.header`
background-image: url(${BgDark});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding:30px 5px;
transition: all .3s ease-in-out;
@media (min-width: 990px){
 height:300px;
 display:flex;
 align-items:center;
 justify-content: center;
 padding: 5px;
}
`;
const Todo = styled.h1`
color: #fff;  
font-size: 25px;
font-weight: 700;
letter-spacing: 10px;
transition: all .3s ease-in-out;
@media (min-width: 990px){
 font-size: 40px;
}
`;
const Header = ({guardarTarea, setLigthMode, ligthMode, error, setError}) => {
const handleTema = (e)=>{

  document.querySelector(`[alt="${e.target.alt}"]`).classList.add('animacion');
  document.querySelector('.ocultar').classList.remove('animacion')
  setTimeout(() => {
    //Mostrar el nuevo icono
    document.querySelector('.ocultar').classList.remove('ocultar');
    //Oculto el icono al que se le dio click
  document.querySelector(`[alt="${e.target.alt}"]`).classList.add('ocultar');
  if(e.target.alt === "Icono LigthMode"){
    setLigthMode(true);
  }else{
    setLigthMode(false);
  }
 
  }, 600);
  
}

  return (
    <HeaderS >
       <div className='contenedor'>
       <div className='header-todo'>
            <Todo>TODO</Todo>
            <img src={IconoSol} alt='Icono LigthMode' className= {`${ligthMode ? "ocultar" : "" }`} onClick={handleTema}/>
            <img className={`${ligthMode ? " " : "ocultar" }`} src={IconoLuna} alt='Icono DarkMode'onClick={handleTema}/>
        </div>
        <NuevaTarea guardarTarea={guardarTarea} error={error} setError={setError}/>
       </div>
    </HeaderS>
  )
}

export default Header