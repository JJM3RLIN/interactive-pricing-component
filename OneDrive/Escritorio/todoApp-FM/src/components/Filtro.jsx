import styled from '@emotion/styled';
import btnActivos from '../styles/btnActivos.css';
const AccionesTodo = styled.div`
    background-color:  hsl(235, 24%, 19%);
    margin: 15px 0;
    padding:10px;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 10px;
    transition: all .3s ease-in-out;
    @media (min-width: 990px){
     background-color: transparent;
     max-width: 300px;
     margin: 0 auto;
     transform: translate(-30px, -50px);
    }
`;
const Accion = styled.button`
 color:  hsl(234, 11%, 52%);
 border:none;
 background:none;
 font-size: 15px;
 font-weight: 700;
 transition: all .3s ease-in-out;
 &:hover{
   color: hsl(236, 33%, 92%);
 }
 @media (min-width: 990px){
  font-size: 17px;
 }
`;
const Filtro = ({filtro, setFiltro}) => {
 
  return (
    <AccionesTodo>
    <Accion id='' className={`${filtro ? "" : "activo"}`} data-fil="1" onClick={e=>setFiltro(e.target.id)}>Todos</Accion>
    <Accion id='activas'className={`${filtro==="activas" ? 'activo' : ""}`} onClick={e=>setFiltro(e.target.id)}>Activos</Accion>
    <Accion id="completadas" className={`${filtro==="completadas" ? 'activo' : ""}`} onClick={e=>setFiltro(e.target.id)}>Completados</Accion>
   </AccionesTodo>
  )
}

export default Filtro