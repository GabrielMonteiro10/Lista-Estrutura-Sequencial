function calcular(){
    //Obter dados
        let peso = Number (document.getElementById("peso").value)
    // Utilizar number para converter os dados para número

        let aumentodepeso = peso * 1.15
        let diminuirpeso = peso * 0.80      

    //saida de dados
    document.getElementById("aumentodepeso").innerHTML = "Caso tenha engordado seu peso será " + aumentodepeso.toFixed(2) + " kg e se tiver emagrecido será " + diminuirpeso.toFixed(2) +" kg."


}