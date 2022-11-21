function display(num){
   result.value+=num 
}
function allclear(){
    result.value=""
}

function evaluateexp(){
    currentExp=result.value
    result.value=eval(result.value)

    // result.value=eval(result.value)
}

function backspace(){
    result.value=result.value.slice(0,-1)
}