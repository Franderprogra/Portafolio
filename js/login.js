let ID= document.getElementById("ID")
let email= document.getElementById("email")
let password= document.getElementById("password")
let registro=localStorage.getItem("registro")
let registroUser=[]
function inicio() {
    registroUser= JSON.parse(localStorage.getItem("registro")) || [];
    
    encontrado= registroUser.find (usuario=> usuario.ID==ID.value &&  usuario.email==email.value && usuario.password==password.value)
    if (encontrado) {
        alert("BIEN HECHO")
        localStorage.setItem("usuariologgeado",JSON.stringify(encontrado))
        
        window.location.href = "indext.html"

    }
    else if (inicio) {

        alert("ESTE USUARIO NO TIENE CUENTA")
    }
}