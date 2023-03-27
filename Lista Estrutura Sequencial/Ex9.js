function calcular(){
    
    let altura = Number (document.getElementById("altura").value)

    let basemaior = Number (document.getElementById("basemaior").value)
    let basemenor = Number (document.getElementById("basemenor").value)

    let total = ((basemaior + basemenor) * altura)/2  


document.getElementById("total").innerHTML = "A área do trapézio é " + total + " Metros."

}