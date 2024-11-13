function simularAhorro() {
    const montoInicial = parseFloat(document.getElementById("montoInicial").value);
    const ahorroMensual = parseFloat(document.getElementById("ahorroMensual").value);
    const meses = parseInt(document.getElementById("meses").value);
    const resultContainer = document.getElementById("result");

    // Validación de los datos ingresados
    if (isNaN(montoInicial) || isNaN(ahorroMensual) || isNaN(meses) || montoInicial < 0 || ahorroMensual < 0 || meses <= 0) {
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    let totalAhorro = montoInicial;
    let resultadoHTML = `<h3>Resultados de ahorro:</h3><ul>`;

    // Bucle for para simular el ahorro mes a mes
    for (let mes = 1; mes <= meses; mes++) {
        totalAhorro += ahorroMensual;
        resultadoHTML += `<li>Mes ${mes}: Total ahorrado $${totalAhorro.toFixed(2)}</li>`;
    }

    resultadoHTML += `</ul>`;
    resultContainer.innerHTML = resultadoHTML;
}

