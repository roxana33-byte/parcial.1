
//EJERCICIO#1
    function ejercicioGasolina() {
    const clave = prompt("Ingrese la clave de gasolina (A, B o C)");
    const litros = Number(prompt("Ingrese la cantidad de litros consumidos"));
    let precio = 0;
    
    if (clave == "A") precio = 32.5;
    else if (clave == "B") precio = 34.7;
    else if (clave == "C") precio = 36.9;
    else return alert("Clave inválida");

    const total = litros * precio;
    alert("Total a pagar: Q" + total.toFixed(2));
    document.getElementById("resultado").innerHTML = "Gasolina: Q" + total.toFixed(2);
}

//EERCICIO#2
function ejercicioCalendario() {
    const mes = parseInt(prompt("Ingrese el número del mes (1-12):"));
    const año = parseInt(prompt("Ingrese el año:"));
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const diasMes = [31, (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes >= 1 && mes <= 12) {
        alert(`${meses[mes - 1]} tiene ${diasMes[mes - 1]} días.`);
        document.getElementById("resultado").innerHTML = `${meses[mes - 1]} tiene ${diasMes[mes - 1]} días.`;
    } else {
        alert("Mes inválido");
    }
}

//EJERCICIO#3
function ejercicioVotacion() {
    let depto, edad;
    let conteo = {
        huehue: [], quetzal: [], guate: []
    };

    while (true) {
        depto = prompt("Ingrese su departamento (HUEHUETENANGO, QUETZALTENANGO, GUATEMALA o SALIR)").toUpperCase();
        if (depto === "SALIR") break;
        edad = parseInt(prompt("Ingrese su edad"));

        if (depto === "HUEHUETENANGO") conteo.huehue.push(edad);
        else if (depto === "QUETZALTENANGO") conteo.quetzal.push(edad);
        else if (depto === "GUATEMALA") conteo.guate.push(edad);
        else alert("Departamento inválido");

        alert(edad >= 18 ? "Puede votar" : "No puede votar");
    }

    let res = "";
    const estadisticas = (arr, nombre) => {
        let mayores = arr.filter(e => e >= 18).length;
        let menores = arr.length - mayores;
        let promedio = arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
        res += `${nombre}: Total=${arr.length}, Mayores=${mayores}, Menores=${menores}, Promedio=${promedio.toFixed(2)}<br>`;
    };

    estadisticas(conteo.huehue, "Huehuetenango");
    estadisticas(conteo.quetzal, "Quetzaltenango");
    estadisticas(conteo.guate, "Guatemala");

    document.getElementById("resultado").innerHTML = res;
}

//EJERCICIO#4
function ejercicioIMC() {
    const peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    const altura = parseFloat(prompt("Ingrese su altura en metros:"));
    const imc = peso / (altura * altura);
    let estado = "";

    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 24.9) estado = "Normal";
    else if (imc < 29.9) estado = "Sobrepeso";
    else estado = "Obesidad";

    alert(`IMC: ${imc.toFixed(2)} - Estado: ${estado}`);
    document.getElementById("resultado").innerHTML = `IMC: ${imc.toFixed(2)} - Estado: ${estado}`;
}

//EJERCICIO#5
function ejercicioNotas() {
    let nota, curso, total = 0, totalNotas = 0;
    let r1 = [], r2 = [], r3 = [];

    for (let i = 0; i < 15; i++) {
        curso = prompt("Ingrese el nombre del curso:");
        nota = parseFloat(prompt("Ingrese la nota del curso:"));

        total += nota;
        totalNotas++;

        if (nota <= 40) r1.push(nota);
        else if (nota <= 70) r2.push(nota);
        else r3.push(nota);
    }

    const promedio3 = r3.length ? (r3.reduce((a, b) => a + b, 0) / r3.length) : 0;
    const promedioGeneral = total / totalNotas;

    document.getElementById("resultado").innerHTML = `
        Notas 0-40: ${r1.length} (Suma: ${r1.reduce((a,b)=>a+b,0)})<br>
        Notas 41-70: ${r2.length} (Suma: ${r2.reduce((a,b)=>a+b,0)})<br>
        Notas 71-100: ${r3.length} (Suma: ${r3.reduce((a,b)=>a+b,0)})<br>
        Total notas: ${totalNotas}<br>
        Suma total: ${total}<br>
        Promedio 71-100: ${promedio3.toFixed(2)}<br>
        Promedio general: ${promedioGeneral.toFixed(2)}
    `;
}

//EJERCICIO#5
function ejercicioVehiculos() {
    const marcas = ["Toyota", "Nissan", "Kia", "Mazda", "Hyundai", "Chevrolet", "Ford", "Honda", "BMW", "Volkswagen"];
    let res = "";

    res += "For in:<br>";
    for (let i in marcas) res += marcas[i] + "<br>";

    res += "<br>For of:<br>";
    for (let m of marcas) res += m + "<br>";

    res += "<br>For tradicional:<br>";
    for (let i = 0; i < marcas.length; i++) res += marcas[i] + "<br>";

    res += "<br>For descendente:<br>";
    for (let i = marcas.length - 1; i >= 0; i--) res += marcas[i] + "<br>";

    document.getElementById("resultado").innerHTML = res;
}
