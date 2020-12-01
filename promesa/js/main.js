var myOrder = false;

// Promesa = Pediente
console.log('No se, si mi pedido llegara la siguiente semana.');
document.getElementById("pending").innerHTML = 'No se, si mi pedido llegara la siguiente semana.';


var willMyOrderArrive = new Promise(
    //Resolve retorna un valor resuelto
    //Reject si es rechazado por la razón específicada
    
    function (resolve, reject) {
        if (myOrder) {
            //Arreglo
            var ssd = {
                product: 'Disco de estado solido',
                brand: 'PNY'
            };
            n =  new Date();

            //Año
            y = n.getFullYear();
            //Mes
            m = n.getMonth() + 1;
            //Día
            d = n.getDate();

            //Mostrar fecha.
            document.getElementById("date").innerHTML = "La fecha de entrega fue " + d + "/" + m + "/" + y;

            resolve('Tu pedido fue entregado: ' + ssd.product + ' de marca ' +ssd.brand);
        } else {
            var reason = new Error('El cliente no se encontraba en su domicilio ');
            reject(reason);
        }

    }
);


// Se llama la promesa
var stateRequested = function () {
    willMyOrderArrive
        // Si se cumple la promesa se retorna .then()
        .then(function (fulfilled) {
            // Cumplido(fulfilled)  se cumplio la promesa y llegara el pedido
            document.getElementById("promesa").innerHTML = fulfilled;
            console.log(fulfilled);
        })
        // Si falla la promesa se retorna .catch()
        .catch(function (error) {
            // Rechazado(Rejected)  no se cumplio la promesa y no se entrego el pedido
            document.getElementById("promesa").innerHTML = error.message;
            console.log(error.message);
        });
}

//Se llama la función

stateRequested();
