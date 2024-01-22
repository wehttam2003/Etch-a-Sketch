const padContainer = document.querySelector(".pad-container");
console.log(padContainer)

for (let i = 0; i < 32; i++){
    let pad = document.createElement("div");
    pad.classList.add("pad");
    padContainer.appendChild(pad);
}