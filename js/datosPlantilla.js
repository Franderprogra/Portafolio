let iniciales= document.getElementById( "iniciales")
let tunombre=document.getElementById("tunombre")
let bienvenidad=document.getElementById("bienvenidad")
let hablaDeTi=document.getElementById("hablaDeTi")
let proyecto=document.getElementById("proyecto")
let proyecto2=document.getElementById("proyecto2")
let link1=document.getElementById("link1")
let link2=document.getElementById("link2")
let link3=document.getElementById("link3")
let link4=document.getElementById("link4")
let registroUser=[];
function Pegar() {
    registroUser= JSON.parse(localStorage.getItem("registro")) || [];
    
}