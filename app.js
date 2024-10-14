// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// Definimos las tasas de cambio como constantes, ya que no cambiarán durante la ejecución
const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Función para convertir de dólares a yenes
const fromDollarToYen = (usd) => {
    const euros = usd / oneEuroIs.USD;
    const yen = euros * oneEuroIs.JPY;
    return yen;
};

// Función para convertir de euros a dólares
const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs.USD;
};

// Función para convertir de yenes a libras
const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    const pound = euros * oneEuroIs.GBP;
    return pound;
};

// Exportamos las funciones para poder utilizarlas en otros módulos
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound  };
