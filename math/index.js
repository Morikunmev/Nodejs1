// Función para sumar
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
}