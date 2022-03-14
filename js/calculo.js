function calcular() {
    var inv, calcular;
    inv = window.document.Banco.inv.value;
    calcular = parseFloat(inv) * 0.02;
    window.document.Banco.inputtext.value = calcular;
}

function calcularventas() {
    var sueldo, ventas, calcularventas, calculartotal, calcularsueldo;
    sueldo = window.document.Ventasv.sueldo.value;
    ventas = window.document.Ventasv.ventas.value;
    calcularsueldo = parseFloat(sueldo) * 0.1;
    calcularventas = parseFloat(calcularsueldo) * parseFloat(ventas);
    calculartotal = parseFloat(calcularventas) + parseFloat(sueldo);

    window.document.Ventasv.inputtext.value = calculartotal;
}

function calculariver() {
    var inv1, inv2, inv3, totalinv, Pinv1, Pinv2, Pinv3;

    inv1 = window.document.Calculadora.inv1.value;
    inv2 = window.document.Calculadora.inv2.value;
    inv3 = window.document.Calculadora.inv3.value;

    totalinv = parseFloat(inv1) + parseFloat(inv2) + parseFloat(inv3);
    Pinv1 = (parseFloat(inv1) / totalinv) * 100;
    Pinv2 = (parseFloat(inv2) / totalinv) * 100;
    Pinv3 = (parseFloat(inv3) / totalinv) * 100;

    window.document.Calculadora.inputtext1.value = Pinv1;
    window.document.Calculadora.inputtex2.value = Pinv2;
    window.document.Calculadora.inputtext3.value = Pinv3;
}

function Fisica() {
    var vol, pres, tem, calcular1, Ctemperatura;
    vol = window.document.Calculadorafisica.vol.value;
    pres = window.document.Calculadorafisica.pres.value;
    tem = window.document.Calculadorafisica.tem.value;

    Ctemperatura = (0.37 * (parseFloat(tem) + 460));
    calcular1 = (parseFloat(pres) * parseFloat(vol)) / Ctemperatura;

    window.document.Calculadorafisica.inputtext.value = calcular1;
}

function alerborrar() {
    alert('Los datos se han borrado correctamente');
}