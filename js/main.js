const btn = document.querySelector("button");
const items = document.querySelectorAll("li");
let fontSize = 10;

// Pętla For
btn.addEventListener("click", () => {
    fontSize++;

    for (let i = 0; i < items.length; i++ ) {
        items[i].style.display = "block";
        items[i].style.fontSize = `${fontSize}px`;   
    }
})

// Pętla Foreach
btn.addEventListener("click", () => {

    items.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = fontSize + "px"; 
    })
    fontSize++;
})