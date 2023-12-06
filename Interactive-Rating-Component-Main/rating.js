let rateBtn = document.querySelectorAll("#rating");

for (const k in rateBtn) {
    
    let Key = false;
    

    rateBtn[k].addEventListener("mouseover", ()=>{   
        console.log("in mouseover");     
        if (Key == false){
            console.log("over Clicked = " + Key);
            for(let i = 0; i <=k; i++){
                rateBtn[i].style.backgroundColor = "red";
            }
        }else{
            console.log("over Clicked = " + Key)
            for(let i = 0; i <=k; i++){
                rateBtn[i].style.backgroundColor = "blue";  
            }
        }
    });


    rateBtn[k].addEventListener("mouseout", ()=>{
        console.log("in mouse out");
            // console.log("Press: " +rateBtn[k].innerHTML);
            if(Key == false){
                console.log("out key: " + Key);
                for (const l in rateBtn) {
                    rateBtn[l].style.backgroundColor = "rgb(26, 26, 29)";
                    // console.log("mouseout: " +l);
                }
            }else{
                console.log("out key: " + Key);
                for (let i = k+1; i<rateBtn.length; i++ ) {
                    rateBtn[i].style.backgroundColor = "rgb(26, 26, 29)";
                    // console.log("mouseout: " +l);
                }
            }
            
    });

    rateBtn[k].addEventListener("click", ()=>{
        console.log("in clikced");
        // console.log("Key");
        // console.log("in Key " + document.getElementById("final").value);
        document.getElementById("final").disabled= false;
        document.getElementById("final").style.backgroundColor = "rgb(226, 115, 24)";
        console.log("before inClick: "+Key);
        Key = true;
        console.log("after inclick: " + Key);
    })

    function over(){
        console.log("Press: " +rateBtn[k].innerHTML);
        for(let i = 0; i <=k; i++){
            rateBtn[i].style.backgroundColor = "red";
            console.log("i: " +i);
        }
        for(let j = 4; j > k; j--){
            rateBtn[j].style.backgroundColor = "rgb(26, 26, 29)";
            console.log("j: " +j);
        }
    }

    
    function out(){
        console.log("Press: " +rateBtn[k].innerHTML);
        for (const l in rateBtn) {
            rateBtn[ll].style.backgroundColor = "rgb(26, 26, 29)";
            console.log("k: " +k);
        }
        
    }
    
}    
//----------------------------------------------------------------------------

// for(let i = 0; i<5; i++){
//     rateBtn[i].addEventListener("mouseover", all);
//     // console.log(rateBtn[i])
// }

// function all(i){
//     let clickStatus = false;
//     console.log(i+1);
//     //function neverClicked
//     if(clickStatus == false){
//     console.log("never clicked")

//     }
    
//     //function clicked at least once
//     if(clickStatus == true){
//     console.log("Clicked at least once");
//     }
// }