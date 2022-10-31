let seguirOperando = true;

while (seguirOperando === true) {
  alert("Estas por pedir un prestamo, continua si tienes mas de 18 años");

  let nombre = prompt("¿Como te llamas?");

  let edad = prompt("¿Que edad tienes?");

  //ponemos cual es el usuario//

  console.log("el usuario es " + nombre + " de " + edad + " años");

  //si el usuario es mayor de 18//

  if (edad >= 18) {
    alert(
      "Perfecto, " +
        nombre +
        ". Los prestamos tienen un interes del 25 porciento si pides hasta 500 dolares, y de un 50 porciento si pides mas de 500 dolares. Introduce la cantidad que quieras pedir para saber cuanto es el interes y el valor final a devolver."
    );

    let pedido = parseInt(prompt("cuanto quieres pedir?"));

    function obtenerPorcentaje(numero, divisor) {
      let resultado = numero / divisor;
      return resultado;
    }

    let interesUno = parseInt(obtenerPorcentaje(pedido, 2));

    let interesDos = parseInt(obtenerPorcentaje(pedido, 4));

    //si pide mas de 500//

    if (pedido >= 500) {
      alert(
        "Si pides " +
          pedido +
          " el interes es de " +
          interesUno +
          " y el total a devolver es de " +
          parseInt(pedido + interesUno + ".")
      );
    }

    //si pide menos de 500//
    else {
      alert(
        "Si pides " +
          pedido +
          " el interes es de " +
          interesDos +
          " y el total a devolver es de " +
          parseInt(pedido + interesDos + ".")
      );
    }
    alert("Listo, ya pediste tu prestamo.");
  }

  //si el usuario es menor de 18//
  else {
    alert(
      "Lo sentimos, " +
        nombre +
        ". Tienes que ser mayor de 18 años para pedir un prestamo."
    );
  }

  let seguir = parseInt(prompt("Quieres seguir operando? (Escribe 1.si 2.no)"));

  if (seguir === 1) {
    seguirOperando = true;
  } else {
    seguirOperando = false;
  }
}

alert("Hasta la proxima.");

function obtenerPorcentaje(numero, divisor) {
  let resultado = numero / divisor;
  alert(resultado);
}
