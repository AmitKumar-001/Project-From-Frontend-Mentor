// let dayIn = document.getElementById("day").value;
// let monthIn = document.getElementById("month").value;
// let yearIn = document.getElementById("year").value;
// let dateObj = new Date();
// let currentYear = dateObj.getFullYear();
// let currentMonth = dateObj.getMonth()+1;
// let toDay = dateObj.getDate();

// console.log("Enter as day: "+dayIn);
// console.log("Enter as month: "+monthIn);
// console.log("Enter as year: "+yearIn);
// console.log("Today is: "+dateObj);
// console.log("Current Year: "+currentYear);
// console.log("Current Month: "+currentMonth);
// console.log("Current Day: "+toDay);

const afterSubmit = document.getElementById("submit");
afterSubmit.addEventListener("click",start);
function start(){
    console.log("after click");
    // variable declaration
    let dayIn = document.getElementById("day").value;
    let monthIn = document.getElementById("month").value;
    let yearIn = document.getElementById("year").value;
    let dateObj = new Date();
    let currentYear = dateObj.getFullYear();
    let currentMonth = dateObj.getMonth()+1;
    let toDay = dateObj.getDate();
    let errMD = document.getElementById("errD");
    let errMM = document.getElementById("errM");
    let errMY = document.getElementById("errY");
    let inst = document.getElementById("inputPart");
    let inBox = document.querySelectorAll("input");

    console.log("Enter as day: "+dayIn);
    console.log("Enter as month: "+monthIn);
    console.log("Enter as year: "+yearIn);
    console.log("Today is: "+dateObj);
    console.log("Current Year: "+currentYear);
    console.log("Current Month: "+currentMonth);
    console.log("Current Day: "+toDay);

    //err if blank
    if(dayIn == ""){
        errMD.style.visibility = "visible";
        errStyl();
    }
    if(monthIn == ""){
        errMM.style.visibility = "visible";
        errStyl();
    }
    if(monthIn > 12){
        errMM.innerHTML = "Must be a valid Month";
        errMM.style.visibility = "visible";
        errStyl();
    }
    if(yearIn == ""){
        errMY.style.visibility = "visible";
        errStyl();
    }
    if(yearIn > currentYear){
        errMY.innerHTML = "Must be in the past";
        errMY.style.visibility = "visible";
        errStyl();
    }
    //start validation
    if(dayIn > 0 && dayIn < 32){
        console.log("day between 1 - 31");
        if(monthIn > 0 && monthIn < 13){
            console.log("Month between 1 - 12");
            if(yearIn > 1000 && yearIn <= currentYear){
                console.log("Year is also valid");
                console.log("Enter date is: "+dayIn+" / "+monthIn+" / "+yearIn);
                //validate date
                if(yearIn == currentYear){
                    console.log("Enter year is same as this year");
                    if(monthIn == currentMonth){
                        console.log("Enter Month is same as this month");
                            if(dayIn <= toDay){
                                console.log("Congratulation you have enter a valid date");
                                nextValidation(); //Validation for specific number of day in the month
                            }else{
                                console.log("You have enter coming date");
                                //alert("Retry with a valid day");
                                errMD.innerHTML = "Must be in the past";
                                errMD.style.visibility = "visible";
                                errStyl();  
                            }
                    }else if(monthIn < currentMonth){
                        console.log("Enter month is earlier of this month");
                        nextValidation(); //Validation for specific number of day in the month
                    }else{
                        console.log("Enter month is coming");
                        //alert("Retry with a valid month");
                        errMM.innerHTML = "Must be in the past";
                        errMM.style.visibility = "visible";
                        errStyl();                        
                    }
                }else{
                    console.log("Ener year is earlier of this year");
                    nextValidation(); //Validation for specific number of day in the month
                }
            }else{
                console.log("Year is not valid");
                //alert("Retry with a valid year");
                errMY.innerHTML = "Must be in the past";
                errMY.style.visibility = "visible";
                errStyl();
            }
        }else{
            console.log("Month is not between 1 - 12");
            //alert("Month should be between 01 - 12 only");
            errMM.innerHTML = "Must be a valid Month";
            errMM.style.visibility = "visible";
            errStyl();
        }
    }else{
        console.log("day is not between 1 - 31");
        //alert("Day should between 01 to 31 only");
        errMD.innerHTML = "Must be a valid day";
        errMD.style.visibility = "visible";
        errStyl();
    }

    //Validation for specific number of day in the month
    function nextValidation(){
        console.log("Under nextValidation");

        //Months for 31 days is  alredy validated
        if(monthIn == 1 || monthIn == 3 || monthIn == 5 || monthIn == 7 || monthIn == 8 || monthIn == 10 || monthIn == 12){
            console.log("31 day in the month");
            console.log("it will alway correct");
            console.log("Congratulation validation has passed");
            calculate(); //after final validation

        }//Months for 30 days
        else if(monthIn == 4 || monthIn == 6 || monthIn == 9 || monthIn == 11){
            console.log("30 days in the month");
            if(dayIn == 31){
                console.log("Date should not be 31 in the month");
                //alert("Date of the month "+monthIn+ " can't be 31");
                errMD.innerHTML = "Must be a valid date";
                errMD.style.visibility = "visible";
                errStyl();
            }else{
                console.log("Congratulation validation has passed");
                calculate(); //after final validation
            }
        }else{
            //check for leap year
            console.log(yearIn%4);
            if(yearIn%4 == 0){
                console.log("leap year");
                console.log("Feb 29 days")
                if(dayIn > 29){
                    console.log("Feb of the year can't be: "+dayIn);
                    //alert("Feb of the year can't be: "+dayIn);
                    errMD.innerHTML = "Must be a valid day";
                    errMD.style.visibility = "visible";
                    errStyl();
                }else{
                    console.log("Congratulation validation has passed");
                    calculate(); //after final validation
                }
            }else{
                console.log("not a leap year");
                console.log("Feb 28 days");
                if(dayIn > 28){
                    console.log("Feb of the year can't be: "+dayIn);
                    //alert("Feb of the year can't be: "+dayIn);
                    errMD.innerHTML = "Must be a valid day";
                    errMD.style.visibility = "visible";
                    errStyl();
                }else{
                    console.log("Congratulation validation has passed");
                    calculate(); //after final validation
                }
            }
        }
    }

    //error styl
    function errStyl(){
        inst.style.color = "hsl(0, 100%, 67%)";
        inBox[0].style.borderColor = "hsl(0, 100%, 67%)";
        inBox[1].style.borderColor = "hsl(0, 100%, 67%)";
        inBox[2].style.borderColor = "hsl(0, 100%, 67%)";
    }
    //calculation start here
    function calculate(){
        console.log("Enter as day: "+dayIn);
        console.log("Enter as month: "+monthIn);
        console.log("Enter as year: "+yearIn);
        console.log("Today is: "+dateObj);
        console.log("Current Year: "+currentYear);
        console.log("Current Month: "+currentMonth);
        console.log("Current Day: "+toDay);

        let resDay;
        let resMonth;
        let resYear;
        if(toDay < dayIn){
            resDay = (toDay + 30 - dayIn);
            currentMonth = (currentMonth - 1);
            if(currentMonth < monthIn){
                resMonth = (currentMonth + 12 - monthIn);
                currentYear = (currentYear - 1);
                resYear = currentYear - yearIn;
            }else{
                resMonth = (currentMonth - monthIn);
                resYear = (currentYear - yearIn);
            }
        }else{
            resDay = (toDay - dayIn);
            if(currentMonth < monthIn){
                resMonth = (currentMonth + 12 - monthIn);
                currentYear = (currentYear - 1);
                resYear = (currentYear - yearIn);
            }else{
                resMonth = (currentMonth - monthIn);
                resYear = (currentYear - yearIn);
            }
        }
        console.log("Result of age");
        console.log("Days: "+resDay);
        console.log("Months: "+resMonth);
        console.log("Years: "+resYear);
        document.getElementById("resultY").innerHTML = resYear;
        document.getElementById("resultM").innerHTML = resMonth;
        document.getElementById("resultD").innerHTML = resDay;
    }
}

