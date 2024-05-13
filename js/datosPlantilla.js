

/*linea de guardado*/


let iniciales = document.getElementById("iniciales")
let tunombre = document.getElementById("tunombre")
let bienvenidad = document.getElementById("bienvenidad")
let hablaDeTi = document.getElementById("hablaDeTi")
let proyecto = document.getElementById("proyecto")
let proyecto2 = document.getElementById("proyecto2")
let link1 = document.getElementById("link1")
let link2 = document.getElementById("link2")
let link3 = document.getElementById("link3")
let link4 = document.getElementById("link4")
let registroUser = [];
let nuevosDatos = []; 




function guardar() {
  console.log("entro a guardar")
  
  let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLogeado")) || [];


  if (iniciales.value != "" && tunombre.value != "" && bienvenidad.value != "" && hablaDeTi.value != "" && proyecto.value != "" && link1.value != "" && link2.value != "" && link3.value != "" && link4.value != "" && proyecto2.value != "") {
    
    nuevosDatos = {
      iniciales: iniciales.value,
      tunombre: tunombre.value,
      bienvenidad: bienvenidad.value,
      hablaDeTi: hablaDeTi.value,
      proyecto: proyecto.value,
      link1: link1.value,
      link2: link2.value,
      link3: link3.value,
      proyecto2: proyecto2.value,
      link4: link4.value
    }
    

    
  }
  let newdata = { ...usuarioLoggeado, ...nuevosDatos }
  /*registroUser.push(data);*/

  localStorage.setItem("portafolio", JSON.stringify(newdata));
  window.location.href="plantilla.html"
}



/*function guardar() {
  usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLogeado"))


  if (iniciales.value != "" && tunombre.value != "" && bienvenidad.value != "" && hablaDeTi.value != "" && proyecto.value != "" && link1.value != "" && link2.value != "" && link3.value != "" && link4.value != "" && proyecto2.value != "") {

    usuarioLoggeado.iniciales = iniciales.value;
    usuarioLoggeado.tunombre = tunombre.value;
    usuarioLoggeado.bienvenidad = bienvenidad.value;
    usuarioLoggeado.hablaDeTi = hablaDeTi.value;
    usuarioLoggeado.proyecto = proyecto.value;
    usuarioLoggeado.proyecto2 = proyecto2.value;
    usuarioLoggeado.link1 = link1.value;
    usuarioLoggeado.link2 = link2.value;
    usuarioLoggeado.link3 = link3.value;
    usuarioLoggeado.link4 = link4.value;

    localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioLogeado));
    window.location.href = "plantilla.html";

  }

}*/



