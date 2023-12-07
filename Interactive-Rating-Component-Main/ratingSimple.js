
let clickStatus = false;
let clickOn;
let rateBtn = document.querySelectorAll(".rating");

//function for mouse over
function over(i){
    console.log("mouse over: " + i);
    //never has clicked
    if(clickStatus == false){
        console.log("never clicked");
        for(let j = 0; j<i; j++){
            rateBtn[j].style.backgroundColor = "red";
        }
    }//Already clicked at least once
    else{
        console.log("already clicked on "+ clickOn);
        for(let j = 0; j<i; j++){
            rateBtn[j].style.backgroundColor = "rgb(226, 42, 29)";
        }
        for(let j = i; j<5; j++){
            rateBtn[j].style.backgroundColor = "rgb(26, 26, 29)";
        }
    }
}

//function for mouse out
function out(i){
    console.log("mouse out from: " + i);
    //never has clicked
    if(clickStatus == false){
        console.log("never clicked");
        for(let j = 0; j < 5; j++){
            rateBtn[j].style.backgroundColor = "rgb(26, 26, 29)";
        }
    }//Already clicked at least once
    else{
        console.log("already clicked on "+ clickOn);
        for(let j = 0; j<clickOn; j++){
            rateBtn[j].style.backgroundColor = "red";
        }
        for(let j = clickOn; j<5; j++){
            rateBtn[j].style.backgroundColor = "rgb(26, 26, 29)";
        }
    }
}

//function when click
function clicked(i){
    console.log("Clicked on: " + i);
    document.getElementById("submitID").disabled= false; //make active Submit button
    document.getElementById("submitID").style.backgroundColor = "rgb(226, 115, 24)";
    clickStatus = true;
    clickOn = i;
    console.log("clicked status: "+clickStatus);
    console.log("already clicked on "+clickOn);
    for(let j = i; j<5; j++){
        rateBtn[j].style.backgroundColor = "rgb(26, 26, 29)";
    } 
    for(let j = 0; j<i; j++){
        rateBtn[j].style.backgroundColor = "red";
    }
}

//function when submit
function submited(){
    document.getElementById("select").innerHTML = clickOn;
    document.getElementById("whole").style.display = "none";
    document.getElementById("thanks").style.display = "flex";
}