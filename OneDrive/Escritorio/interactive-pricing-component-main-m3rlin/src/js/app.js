addEventListener("DOMContentLoaded", () => {
  mostrarPrecios();
  descuento();
  cambairBg();
});
const verdeMuyClaro = "#a3f3ea";
const gris = "#eaeefb";
const listaPrecios = [8, 12, 16, 24, 36];
const listaVisitas = ["10K pageviews", "50K pageviews", "100k PAGEVIEWS", "500k pageviews", "1M pageviews"];
const barraRango = document.querySelector(".barra-rango");
const precio = document.querySelector(".precio");
let tipo = 0; // saber el tipo de suscripcion 0 es mensual y 1 es anual
barraRango.addEventListener("change", () => {
  mostrarPrecios();
  cambairBg();
});
const tiempo = document.querySelector(".tiempo");
tiempo.textContent = "/ month"; //tipo de suscripción
function descuento() {
  const aplicarDescuento = document.querySelector(".year");
  const descuento = document.querySelector(".tipoSubscripcion-descuento");
  const noDescuento = document.querySelector(".month");
  const slide = document.querySelector(".deslizar");
  aplicarDescuento.addEventListener("click", () => {
    const btnColor = document.querySelector('.cambiar');
    btnColor.style = 'background-color: #47d1c2';
    //añadir el 25%
    tipo = 1;
    descuento.classList.add("mostrar");
    slide.style.transform = "translateX(2.7rem)"; //mover el boton
    tiempo.textContent = "/ year";
    mostrarPrecios();
  });
  noDescuento.addEventListener("click", () => {
    //quitar el 25%
    tipo = 0;
    descuento.classList.remove("mostrar");
    slide.style.transform = "translateX(0)";
    tiempo.textContent = "/ month";
    mostrarPrecios();
  });
}
//Mostrar los precios
function mostrarPrecios() {
  const visitas = document.querySelector(".views"); //visitas necesarias
  if (tipo == 1) precio.textContent = `$ ${(listaPrecios[parseInt(barraRango.value)] - listaPrecios[parseInt(barraRango.value)] * 0.25) * 12}.00`;
  else if (tipo == 0)  precio.textContent = `$ ${listaPrecios[parseInt(barraRango.value)]}.00`;
  visitas.textContent = listaVisitas[parseInt(barraRango.value)]; 
  }
function cambairBg(){

  //cambiar el fondo de la barra
    barraRango.style = `background:
    linear-gradient(to right,${verdeMuyClaro} 0%, 
      ${verdeMuyClaro} ${parseInt(barraRango.value)*25}%, 
      ${gris} 0%, 
      ${gris} 100%)`;
    
}