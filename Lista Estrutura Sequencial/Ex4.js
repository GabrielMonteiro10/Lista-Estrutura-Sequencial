function calcular(){
    // Obter os dados do usuário
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    // calcular a comissão
    let resultado = (n1 + n2)/2
    // Mostrar valores
    document.getElementById("total").innerHTML = "Média = " + resultado
}