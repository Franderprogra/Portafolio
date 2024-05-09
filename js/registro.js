let ID=document.getElementById("ID")
let email=document.getElementById("email")
let password=document.getElementById("password")
let registroUser= [];
 function registrar(){
    registroUser= JSON.parse(localStorage.getItem("registro")) || [];
    encontrado= registroUser.find (usuario=> usuario.ID==ID.value &&  usuario.email==email.value)
    
    if (encontrado!=undefined) {
        alert("este usuario ya esta registrado")
        return;
        
    }
    if (ID != "" && email != "" && password != "") {  
         data = {
            ID: ID.value,
            email: email.value,
            password: password.value
        }
        
        registroUser.push(data)

        localStorage.setItem("registro",JSON.stringify(registroUser))
        
    }
    
 }
 
