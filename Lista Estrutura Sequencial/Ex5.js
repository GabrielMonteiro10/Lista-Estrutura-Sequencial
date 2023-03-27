function calcular(){
    // Obter os dados do usuário
    let valor = Number(document.getElementById("valor").value)
    // calcular a comissão
    let desconto = valor * 0.1
    let resultado = valor - desconto
    // Mostrar valores
    document.getElementById("desconto").innerHTML = "Valor do desconto = R$ " + desconto
    document.getElementById("total").innerHTML = "Valor final com desconto = R$ " + resultado
}