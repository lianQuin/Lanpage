function desplegar(){
    let masinfo = document.getElementById("masinfo")
    let leermas = document.getElementById ("leermas")

    if (masinfo.style.display === "none") {
        masinfo.style.display = "block"
        leermas.innerHTML = "Leer menos"
    } else {
        masinfo.style.display = "none"
        leermas.innerHTML = "Leer más"
    }
}
