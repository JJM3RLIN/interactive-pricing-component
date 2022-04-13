 const generarId = ()=>{
    const random = Math.floor(Math.random()*100).toString(36);
    const fecha = Date.now().toString(36);
    return random + fecha;
}
export default generarId;