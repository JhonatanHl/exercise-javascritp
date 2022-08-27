//Juanito quiere comprar un helado en la heladeria y tiene 2000 pesos dependiendo del costo del helado Juanito puede comprar un helado Juanito requiere un programa que le diga cuanto dinero le sobra a Juanito
var Juanito = 2000;
var helado1 = 500;
var helado2 = 3000;
var helado3 = 1500;
var option = prompt(
  "Que helado deseas comprar" + "1-helado1 2-helado2 3-helado"
);
if (option == 1) {
  console.log(
    "juanito compro el helado1 y le sobra" +
      (Juanito - helado1) +
      "pidele mas plata a tu madre" +
      
  );
} else if (option == 2) {
  console.log(
    `Juanito no puede comprar el helado2 porque es mas de lo que tiene le faltaria ${
      helado3 - Juanito
    } `
  );
} else if (option == 3) {
  console.log("juanito compro el helado1 y le sobra" + (Juanito - helado3));
} else {
  console.log("option not validates");
}
