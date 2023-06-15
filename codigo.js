const nav = document.getElementById("nav");
const boton = document.querySelector(".menu-barra");
const section = document.querySelector(".habilidades");

const data = [];
let aniamciones = () => {
  $(function () {
    $(".chart").easyPieChart({
      size: 170,
      barColor: "#83e",
      scaleLength: 0,
      lineWidth: 7,
      lineCap: "circle",
      animate: 1500,
      escalaColor: "#83e",
    });
  });
};
let boleano = true;
boton.addEventListener("click",()=>{
    show();
    
})
function show() {
   if (boleano) {
       nav.classList.remove("nave");
       nav.classList.add("nav");
       return boleano = false;
   }else{
    nav.classList.remove("nav");
    nav.classList.add("nave");
    return boleano = true;
   }   
}
let menu = document.querySelectorAll("nav a");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click",()=>{
    nav.classList.remove("nav");
    nav.classList.add("nave");
    boleano = true;
  })
  
}


function handleScroll() {
  const { y } = section.getBoundingClientRect();
  if ( 0 >= y >= -21) {
    aniamciones();
  }
return window.removeEventListener("scroll", handleScroll);
}

window.addEventListener("scroll",handleScroll)




