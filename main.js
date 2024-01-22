const padContainer = document.querySelector(".pad-container");
console.log(padContainer);

let rowAmount = 16;
let columnAmount = 16;

for (let i = 0; i < columnAmount; i++){
    let padRow = document.createElement("div");
    padRow.classList.add("pad-row");
    for (let i = 0; i < rowAmount; i++){
        let pad = document.createElement("div");
        pad.classList.add("pad");
        padRow.appendChild(pad);
    }
    padContainer.appendChild(padRow);
}