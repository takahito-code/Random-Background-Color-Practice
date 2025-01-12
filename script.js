const button = document.getElementById("changeColorButton");


button.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    
    const colorCodeDisplay = document.getElementById("colorCode");
    colorCodeDisplay.textContent = `Current Color: ${randomColor}`;
});


