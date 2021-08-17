// tabla
let tabla = (n) => {
    for ( var i = 1; i<= n; i++ ) {
        console.log(`${n} x ${i} = ${n*i}`)
    }
    // factoriales
    for ( var j = 1; j <= n; j++ ) {// de 1 a n
        var fact = 1
        for ( let k = 1; k <= j; k++ ) {
            fact = fact *k
        }
        console.log(`Factorial de ${j} es: ${fact}`)
    }
}
// ingresar numero
let ingreso = () => {
    var n = parseInt(prompt("Ingrese un número, para obtener sus tablas de multiplicar "))
    miFuncionNumero(n)
}
// validar numero
let miFuncionNumero = (a) => {
    alert(`número ingresado: ${a}`)
    if (a >= 1 && a <= 20) {
        tabla(a)
    }
    else { 
        alert(" número fuera de rango")
        ingreso()
    }
}
// invocar función
ingreso()
