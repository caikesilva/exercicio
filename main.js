// JavaScript source code
function tabuada() {
    numero = document.getElementById('numero').value;
    for (var i = 0; i <= 10; i++) {
        resultado = parseInt(numero) * parseInt(i);
        var valores = document.createTextNode(resultado);
        var coluna = document.createElement('td');
        coluna.appendChild(valores);
        var linha = document.querySelector('tr');
        linha.appendChild(coluna);
        console.log(resultado);
    }
}