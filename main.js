let operando1;
let operando2;
let operador;
let limpiarPantalla = false;

let resultado;

const operacion = (op) => {
    if (document.getElementById('pantalla').value.length !== 0 && document.getElementById('pantalla').value !== '-E-') {
        operando1 = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value += op;
        operador = op;
        limpiarPantalla = true;
        if (op === 'sqrt') {
            realizarOperacion();
        }
    }
};

const entradaNumero = (button) => {
  if (!limpiarPantalla && document.getElementById('pantalla').value !== '-E-') {
      document.getElementById('pantalla').value += button;
  } else {
      document.getElementById('pantalla').value = button;
      limpiarPantalla = false;
  }
};

const realizarOperacion = () => {
  operando2 = document.getElementById('pantalla').value;
  switch (operador) {
      case '+':
          resultado = suma(operando1, operando2);
          break;
      case '-':
          resultado = resta(operando1, operando2);
          break;
      case '*':
          resultado = multiplicacion(operando1, operando2);
          break;
      case '/':
          if (Number(operando2) !== 0) {
              resultado = division(operando1, operando2);
          } else {
              resultado = '-E-';
              limpiarPantalla = true;
          }
          break;
      case 'sqrt':
          resultado = raizCuadrada(operando1);
          break;
  }
  document.getElementById('pantalla').value = resultado;
  limpiarPantalla = true;
};

const limpiarTodo = () => {
  operando1 = 0;
  operando2 = 0;
  operador = '';
  limpiarPantalla = false;
  resultado = 0;
  document.getElementById('pantalla').value = '';
};

const suma = (a, b) => {
  return Number(a) + Number(b);
};

module.exports = { suma };