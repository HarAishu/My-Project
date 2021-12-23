var inputNum1 = document.getElementById("num1")
var inputNum2 = document.getElementById("num2")
var Operator = document.getElementById("operator")
var button = document.getElementById("btn")
var Result = document.getElementById("result")

    if(inputNum1.value===""){
        alert("Please Enter Number 1")
    }
    if(inputNum2.value===""){
        alert("Please Enter Number 2")
    }
    var num1 = Number(inputNum1.value)
    var num2 = Number(inputNum2.value)


    var op = Operator.value

   

    function calculate(){

        if(inputNum1.value==="" || inputNum2.value===""){
            alert("Please make sure you have entered both the operands")
            Result.innerHTML = "Number not Entered"
        }else{
            var op = Operator.value
            var expression = inputNum1.value+op+inputNum2.value
            Result.innerHTML = eval(expression)
        }
    }
    
    button.addEventListener("click",calculate)




