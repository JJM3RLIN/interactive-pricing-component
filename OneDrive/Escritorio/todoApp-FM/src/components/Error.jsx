import styled from "@emotion/styled"
const ContenedorErrores = styled.div`
background-color: #e75555;
border-left: 5px solid #930c0c;
color: #fff;
font-size: 15px;
font-weight: 700;
padding: 10px;
max-width: 400px;
margin: 10px auto;
@media (min-width: 990px){
    font-size: 18px;
    margin: 10px 55px;
}
`;
const Error = () => {

  return (
<ContenedorErrores>No has escrito ninguna tarea</ContenedorErrores>
    
  )
}

export default Error
