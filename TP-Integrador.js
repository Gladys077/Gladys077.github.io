function aPagar(){
    let nombreTicket = document.getElementById('nombre-ticket').value;
    let apellidoTicket = document.getElementById('apellido-ticket').value;
    let emailTicket = document.getElementById('correo-ticket').value;
    let cantidadTicket = document.getElementById('cantidad-ticket').value;
    cantidadTicket = parseInt(cantidadTicket);
    let categoriaTicket = document.getElementById('categoria-ticket').value;

    if (categoriaTicket == "Estudiante"){ 
        let totalaPagar = cantidadTicket * 200 * 0.2;
        document.getElementById("total").innerHTML = "Total a Pagar: $ " + totalaPagar;    
        return;
    } else if (categoriaTicket == "Trainee") {
        totalaPagar = cantidadTicket * 200 * 0.5;
        document.getElementById("total").innerHTML = "Total a Pagar: $ " + totalaPagar;    
        return;
        } else {
            totalaPagar = cantidadTicket * 200 * 0.85;
            document.getElementById("total").innerHTML = "Total a Pagar: $ " + totalaPagar;    
        }
}
    
aPagar();


function borrar(){
    document.getElementById("total").innerHTML = "Total a Pagar: $ ";    
}
    
borrar();