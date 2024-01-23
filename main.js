const padContainer = document.querySelector(".pad-container");
console.log(padContainer);

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

//create a function to clear the pads
//create a button that is detached display
//when the button is pressed promt for number of pads and store it in a variable

generatePads(16);
