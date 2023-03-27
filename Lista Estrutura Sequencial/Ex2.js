function calcular(){
    // Obter os dados do usuário
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    // calcular a comissão
    let resultado = n1 * n2 * n3
    // Mostrar valores
    document.getElementById("total").innerHTML = "Resultado = " + resultado
}