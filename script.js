document.getElementById("imcForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);

    var resultado = "";
    if (imc < 18.5) {
        resultado = "Abaixo do peso🦗";
    } else if (imc < 24.9) {
        resultado = "Peso normal🙈";
    } else if (imc < 29.9) {
        resultado = "Sobrepeso/🐘";
    } else {
        resultado = "Obesidade🐳";
    }

    document.getElementById("alertMessage").textContent =
        "Seu IMC é " + imc.toFixed(2) + ". " + resultado;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("alert").style.display = "block";
});

function closeAlert() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("alert").style.display = "none";
}
