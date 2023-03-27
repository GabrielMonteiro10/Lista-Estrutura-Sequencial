function calcular(){
    //Obter dados
        let lado = Number (document.getElementById("lado").value)
    // Utilizar number para converter os dados para número

        let total = (lado * lado)

    //saida de dados
    document.getElementById("total").innerHTML = "A área do quadrado é " + total + " Metros."

}