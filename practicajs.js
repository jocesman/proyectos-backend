/*let num1 = 190;
let num2 = 100;
if (num1 > num2) {
    console.log('num1 es mayor', num1)
} else {
    console.log('num2 es mayor')
}*/

let rol = "editor";
switch (rol) {
    case "admin":
        console.log("Acceso completo");
        break;
    case "editor":
        console.log("Acceso parcial");
        break;
    default:
        console.log("Sin acceso");
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});


