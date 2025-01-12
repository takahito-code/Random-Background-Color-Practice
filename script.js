const button = document.getElementById("changeColorButton");
const colorCodeDisplay = document.getElementById("colorCode");

button.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    
    
    colorCodeDisplay.textContent = `Current Color: ${randomColor}`;
});

colorCodeDisplay.addEventListener("click", ()=> {
const color = colorCodeDisplay.textContent.replace("Current Color: ", "");
navigator.clipboard.writeText(color).then(() => {
    alert (`copied to clipboard: ${color}`);
}).catch(()=> {
    alert("Failed to copy the color code.");
})
});