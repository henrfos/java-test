while(true){
    let arraysize = parseInt(prompt("Enter array size: \n(positive number only)"))
    if(isNaN(arraysize) || arraysize < 1){
        alert("Only positive integers!")

    } else{
        break;
    }
}

while(true){
    let divident = parseInt(prompt("Enter divident: \n(positive number only)"))
    if(isNaN(divident) || divident < 1 || divident <= arraysize){
        alert("Only positive integers less than array size!")

    } else{
        break;
    }
}