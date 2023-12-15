let body = document.querySelector("body");
let toggle = document.getElementById("radioT");
let toggleBtn1 = document.getElementById("themBtn1");
let toggleBtn2 = document.getElementById("themBtn2");
let toggleBtn3 = document.getElementById("themBtn3");
let screen = document.getElementById("screen");
let keypad = document.getElementById("inputBtn");

//theme1 design
function theme1(){
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    body.style.color = "hsl(0, 0%, 100%)";
    toggle.style.backgroundColor = "hsl(223, 31%, 20%)";
    toggleBtn1.style.backgroundColor = "hsl(6, 63%, 50%)";
    toggleBtn2.style.backgroundColor = "hsl(223, 31%, 20%)";
    toggleBtn3.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.color = "hsl(0, 0%, 100%)";
    keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
    eqlBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
    eqlBtn.style.boxShadow = "0px 4px hsl(6, 70%, 34%)";
    eqlBtn.style.color = "hsl(0, 0%, 100%)";
    for(let i = 0; i < 11; i++){
        inputBtn[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        inputBtn[i].style.boxShadow = "0px 4px hsl(28, 16%, 65%)";
        inputBtn[i].style.color = "hsl(221, 14%, 31%)";
    }
    for(let i = 0; i < 4; i++){
        opsBtn[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        opsBtn[i].style.boxShadow = "0px 4px hsl(28, 16%, 65%)";
        opsBtn[i].style.color = "hsl(221, 14%, 31%)";
    }
    resetBtn.style.backgroundColor = " hsl(225, 21%, 49%)";
    resetBtn.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
    resetBtn.style.color = "hsl(0, 0%, 100%)";
    del.style.backgroundColor = " hsl(225, 21%, 49%)";
    del.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
    del.style.color = "hsl(0, 0%, 100%)";    
}

//theme2 design
function theme2(){
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    body.style.color = "hsl(60, 10%, 19%)";
    toggle.style.backgroundColor = "hsl(0, 5%, 81%)";
    toggleBtn1.style.backgroundColor = "hsl(0, 5%, 81%)";
    toggleBtn2.style.backgroundColor = "hsl(25, 98%, 40%)";
    toggleBtn3.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "hsl(60, 10%, 19%)";
    keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
    eqlBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    eqlBtn.style.boxShadow = "0px 4px hsl(25, 99%, 27%)";
    eqlBtn.style.color = "hsl(0, 0%, 100%)";
    for(let i = 0; i < 11; i++){
        inputBtn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        inputBtn[i].style.boxShadow = "0px 4px hsl(35, 11%, 61%)";
        inputBtn[i].style.color = "hsl(60, 10%, 19%)";
    }
    for(let i = 0; i < 4; i++){
        opsBtn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        opsBtn[i].style.boxShadow = "0px 4px hsl(35, 11%, 61%)";
        opsBtn[i].style.color = "hsl(60, 10%, 19%)";
    }
    resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetBtn.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
    resetBtn.style.color = "hsl(0, 0%, 100%)";
    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    del.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
    del.style.color = "hsl(0, 0%, 100%)";    
}

//theme3 design
function theme3(){
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    body.style.color = "hsl(52, 100%, 62%)";
    toggle.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggleBtn1.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggleBtn2.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggleBtn3.style.backgroundColor = "hsl(176, 100%, 44%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
    eqlBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    eqlBtn.style.boxShadow = "0px 4px hsl(177, 92%, 70%)";
    eqlBtn.style.color = "hsl(198, 20%, 13%)";
    for(let i = 0; i < 11; i++){
        inputBtn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        inputBtn[i].style.boxShadow = "0px 4px hsl(290, 70%, 36%)";
        inputBtn[i].style.color = "hsl(52, 100%, 62%)";
    }
    for(let i = 0; i < 4; i++){
        opsBtn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        opsBtn[i].style.boxShadow = "0px 4px hsl(290, 70%, 36%)";
        opsBtn[i].style.color = "hsl(52, 100%, 62%)";
    }
    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetBtn.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
    resetBtn.style.color = "hsl(0, 0%, 100%)";
    del.style.backgroundColor = "hsl(281, 89%, 26%)";
    del.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
    del.style.color = "hsl(0, 0%, 100%)";    
}