var numberone = parseInt(prompt("ingresa el numero 1"));
var numbertwo = parseInt(prompt("ingresa el numero 2"));
var option = prompt(
  "ingresa la operacion matematica 1:suma 2:restar 3:multiplicar 4:division"
);
if (option == 1) {
  console.log(`el resultado es ${numberone + numbertwo}`);
} else if (option == 2) {
  console.log(`el resultado es ${numberone - numbertwo}`);
} else if (option == 3) {
  console.log(`el resultado es ${numberone * numbertwo}`);
} else if (option == 4) {
  console.log(`el resultado es ${numberone / numbertwo}`);
} else {
  console.log("option incorret");
}
