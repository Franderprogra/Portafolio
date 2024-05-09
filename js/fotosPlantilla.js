
const file = document.getElementById( 'foto' );

file.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );

const file2 = document.getElementById( 'foto2' );

file2.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img2.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );

/*linea de guardado*/

let iniciales= document.getElementById( "iniciales")
let tunombre=document.getElementById("tunombre")
let bienvenidad=document.getElementById("bienvenidad")
let hablaDeTi=document.getElementById("hablaDeTi")
let proyecto=document.getElementById("proyecto")
let link1=document.getElementById("link1")
let link2=document.getElementById("link2")
let link3=document.getElementById("link3")
let link4=document.getElementById("link4")
let registroUser=[];
function guardar() {
  registroUser= JSON.parse(localStorage.getItem("registro")) || [];
  if (ID != "" && email != "" && password != "") {  
    data = {
      iniciales:iniciales.value
      tunombre:tunombre.value
      bienvenidad:bienvenidad.value
      hablaDeTi:hablaDeTi.value
      proyecto:proyecto.value
      link1:link1.value
      link2:link2.value
      link3:link3.value
      link4:link4.value
       
       
       
   }
   
   registroUser.push(data)

   localStorage.setItem("registro",JSON.stringify(registroUser))
   
}
  
}
