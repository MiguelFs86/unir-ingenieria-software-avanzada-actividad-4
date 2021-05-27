const assert = require('chai').assert;
const expect = require('chai').expect;
const calculadora = require('../main');

describe('Comprobación el resultado de las operaciones de la calculadora', () => {
  it ('Comprobamos que los números pasados a la función son de tipo numérico', () => {
    const numero1 = 10;
    const numero2 = 14.2;
    assert.typeOf(numero1, "Number", "El número debe de ser un entero");
    assert.typeOf(numero2, "Number", "El número debe de ser un entero");
  });

  it('Devuelve la suma de 2 numeros', () => {
      const resultadoEsperado = 7;
      const numero1 = 2;
      const numero2 = 5;
      assert.typeOf(numero1, "Number", "El número debe de ser un entero");
      assert.typeOf(numero2, "Number", "El número debe de ser un entero");
      const suma = calculadora.suma(numero1, numero2);
      assert.typeOf(suma, "Number", "El resultado de la suma debe ser un número");
      assert.strictEqual(resultadoEsperado, suma);
  });

  it('Devuelve la resta de 2 numeros', () => {
      const resultadoEsperado = 6;
      const numero1 = 12;
      const numero2 = 6;
      assert.typeOf(numero1, "Number", "El número debe de ser un entero");
      assert.typeOf(numero2, "Number", "El número debe de ser un entero");
      const resta = calculadora.resta(numero1, numero2);
      assert.typeOf(resta, "Number", "El resultado de la resta debe ser un número");
      assert.strictEqual(resultadoEsperado, resta);
  });

  it('Devuelve el producto de 2 numeros', () => {
      const resultadoEsperado = 8;
      const numero1 = 4;
      const numero2 = 2;
      assert.typeOf(numero1, "Number", "El número debe de ser un entero");
      assert.typeOf(numero2, "Number", "El número debe de ser un entero");
      const producto = calculadora.multiplicacion(numero1, numero2);
      assert.typeOf(producto, "Number", "El resultado de la multiplicacion debe ser un número");
      assert.strictEqual(resultadoEsperado, producto);
  });

  it('Devuelve la división de 2 numeros', () => {
      const resultadoEsperado = 4;
      const numero1 = 20;
      const numero2 = 5;
      assert.typeOf(numero1, "Number", "El número debe de ser un entero");
      assert.typeOf(numero2, "Number", "El número debe de ser un entero");
      assert.notEqual(numero2, 0, "El divisor de la operación no puede ser 0")
      const division = calculadora.division(numero1, numero2);
      assert.typeOf(division, "Number", "El resultado de la división debe ser un número");
      assert.strictEqual(resultadoEsperado, division);
  });

  it('Devuelve la raiz cuadrada de un numero', () => {
    const resultadoEsperado = 10;
    const numero = 100;
    expect(numero).to.be.at.least(0, "El número para calcular la raiz cuadrada debe ser positivo");
    assert.typeOf(numero, "Number", "El número debe de ser un entero");
    const raizCuadrada = calculadora.raizCuadrada(numero);
    assert.typeOf(raizCuadrada, "Number", "El resultado de la división debe ser un número");
    assert.strictEqual(resultadoEsperado, raizCuadrada);
  });

  it('Devuelve el resultado de concatenar varias operaciones', () => {
    const resultadoEsperado = 6;
    const numero1 = 12;
    const numero2 = 6;
    const numero3 = 8;
    const numero4 = 2;
    assert.typeOf(numero1, "Number", "El número debe de ser un entero");
    assert.typeOf(numero2, "Number", "El número debe de ser un entero");
    assert.typeOf(numero3, "Number", "El número debe de ser un entero");
    assert.typeOf(numero4, "Number", "El número debe de ser un entero");
    /* sqrt( 12 + (6 * (8 / 2 ) ) ) */
    const operaciones = calculadora.raizCuadrada(
        calculadora.suma(numero1, calculadora.multiplicacion(numero2, calculadora.division(numero3, numero4)))
    );
    assert.typeOf(operaciones, "Number", "El resultado de la operación debe ser un número");
    assert.strictEqual(resultadoEsperado, operaciones);
  });

});