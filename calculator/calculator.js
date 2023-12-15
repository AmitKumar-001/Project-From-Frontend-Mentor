let inputBtn = document.querySelectorAll(".digit");
let opsBtn = document.querySelectorAll(".ops");
let eqlBtn = document.getElementById("equl");
let display = document.getElementById("res");
let resetBtn = document.getElementById("reset");
let del = document.getElementById("del");
let inputValue = "";
let inputValue2 = "";
let convertor = "";
let isOpTap = false;
let opperation = "";
let result;

//input Process
for(let i = 0; i<11; i++){
    inputBtn[i].addEventListener("click", inputProcess);
    function inputProcess(){
        if(isOpTap == false){
            inputValue += inputBtn[i].innerHTML;
            convertor = parseInt(inputValue);
            display.value = convertor.toLocaleString("en-US");
        } else if(isOpTap == true){
            inputValue2 += inputBtn[i].innerHTML;
            convertor = parseInt(inputValue2);
            display.value = convertor.toLocaleString("en-US");
        }
    }
}

//opps function
for(let i = 0; i<4; i++){
    opsBtn[i].addEventListener("click", inputSecond);
    function inputSecond(){
        isOpTap = true; 
        if(opperation == ""){
            opperation = opsBtn[i].value;
            display.value += opperation;
        }else if(opperation != ""){
            display.value = display.value.slice(0, -1);
            opperation = opsBtn[i].value;
            display.value += opperation;
        }
    }
}

//calculation start after press equal sign
eqlBtn.addEventListener("click", calculation);
function calculation(){
    console.log("First: " +inputValue);
    console.log("Operator: "+opperation);
    console.log("Second: "+inputValue2);
    result = eval(inputValue + opperation + inputValue2);
    display.value = result;
    console.log("Result: "+result);
    inputValue = result;
    inputValue2 = "";
    opperation = "";
}

//reset process
resetBtn.addEventListener("click", resetProcess);
function resetProcess(){
    isOpTap = false;
    inputValue="";
    inputValue2="";
    display.value = 0;
    opperation = "";
}

//Del process
del.addEventListener("click", deleting);
function deleting(){
    if(isOpTap == false){
        inputValue = inputValue.substring(0, inputValue.length-1);
        display.value = inputValue;
    }else if(inputValue2 != ""){
        inputValue2 = inputValue2.substring(0, inputValue2.length-1);
        display.value = inputValue2;
    }
}