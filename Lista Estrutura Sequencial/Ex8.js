function calcular(){
    //Obter dados
        let peso = Number (document.getElementById("peso").value)
    // Utilizar number para converter os dados para número

        let total = (peso  * 1000)  

    //saida de dados
    document.getElementById("total").innerHTML = "O peso em grama será " + total + "g."

}