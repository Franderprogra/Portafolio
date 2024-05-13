// let iniciales = document.getElementById("iniciales");
//     let tunombre = document.getElementById("tunombre");
//     let bienvenidad = document.getElementById("bienvenidad");
//     let hablaDeTi = document.getElementById("hablaDeTi");
//     let proyecto = document.getElementById("proyecto");
//     let proyecto2 = document.getElementById("proyecto2");
//     let link1 = document.getElementById("link1").value;
//     let link2 = document.getElementById("link2").value;
//     let link3 = document.getElementById("link3").value;
//     let link4 = document.getElementById("link4").value;

function pegar() {
    let registroUser = JSON.parse(localStorage.getItem("registro")) || [];
    encontrado= registroUser.find (usuario=> usuario.ID==ID.value &&  usuario.email==email.value )

    document.getElementById("iniciales1").textContent =usuarioLoggeado.iniciales;
    document.getElementById("tunombre1").textContent =usuarioLoggeado.tunombre;
    document.getElementById("bienvenidad1").textContent = usuarioLoggeado.bienvenidad;
    document.getElementById("hablaDeTi1").textContent = usuarioLoggeado.hablaDeTi;
    document.getElementById("proyecto3").textContent = usuarioLoggeado.proyecto;
    document.getElementById("proyecto4").textContent = usuarioLoggeado.proyecto2;
    document.getElementById("link5").href = usuarioLoggeado.link1;
    document.getElementById("link6").href = usuarioLoggeado.link2;
    document.getElementById("link7").href = usuarioLoggeado.link3;
    document.getElementById("link8").href = usuarioLoggeado.link4;

}
pegar()

