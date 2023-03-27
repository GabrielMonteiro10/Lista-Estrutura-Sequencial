function calcularsalario(){
    // Obter os dados do usuário
    let fixo = Number(document.getElementById("fixo").value)
    let vendas = Number(document.getElementById("vendas").value)
    // calcular a comissão
    let comissao = vendas * 0.04
    // calcular o salário total
    let total = fixo + comissao
    // Mostrar valores
    document.getElementById("comissao").innerHTML = "Comissão R$ " + comissao
    document.getElementById("total").innerHTML = "Salário total R$ " + total
}