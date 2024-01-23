const padContainer = document.querySelector(".pad-container");
const padAmountbutton = document.querySelector("button");

// TO-DO
//place the nested for loops in a function that takes single param (padAmount)
function generatePads(padAmount){
    for (let i = 0; i < padAmount; i++){
        let padRow = document.createElement("div");
        padRow.classList.add("pad-row");
        
        for (let i = 0; i < padAmount; i++){
            let pad = document.createElement("div");
            pad.classList.add("pad");
            pad.addEventListener("mouseover", () => pad.style.backgroundColor="black")
    
            padRow.appendChild(pad);
        }
    
        padContainer.appendChild(padRow);
    }
}

function clearPads(){
    let padRows = document.querySelectorAll(".pad-row");
    padRows.forEach( (padRow) => padRow.parentElement.removeChild(padRow) )
}

function changepadAmount(){
    clearPads()
    let padAmount = prompt("How many pads do you want on the width and height? ");
    if (padAmount > 100){
        alert("pad amount cannot exceed 100!")
        changepadAmount()
    }else if (padAmount <= 0){
        alert("pad amount cannot be less than 0!")
        changepadAmount()
    }else{
        generatePads(padAmount)
    }

}

padAmountbutton.addEventListener("click", changepadAmount)
generatePads(16);
