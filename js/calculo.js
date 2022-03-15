function calcular() {
    var inv, calcular;
    inv = window.document.Banco.inv.value;
    calcular = parseFloat(inv) * 0.02;
    window.document.Banco.inputtext.value = calcular;
}

function calcularventas() {
    var sueldo, ventas1, ventas2, ventas3, comision, res;
    sueldo = window.document.Ventasv.sueldo.value;
    ventas1 = window.document.Ventasv.ventas1.value;
    ventas2 = window.document.Ventasv.ventas2.value;
    ventas3 = window.document.Ventasv.ventas3.value;

    comision = (parseFloat(ventas1) + parseFloat(ventas2) + parseFloat(ventas3)) * 0.10;
    res = parseFloat(sueldo) + parseFloat(comision);

    window.document.Ventasv.comision.value = comision;
    window.document.Ventasv.inputtext.value = res;
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