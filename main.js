let icon = document.getElementById("icon");
let radioButton1 = document.getElementById("radioButton1");
let radioButton2 = document.getElementById("radioButton2");
let radioButton3 = document.getElementById("radioButton3");
let radioButton4 = document.getElementById("radioButton4");
let radioButton5 = document.getElementById("radioButton5");
let radioButton6 = document.getElementById("radioButton6");
let infoContainerActive = document.getElementById("infoContainerActive");
let infoContainerCompleted = document.getElementById("infoContainerCompleted");
let infoContainerAll = document.getElementById("infoContainerAll");

let newTodo = document.getElementById("newTodo");
let addButton = document.getElementById("addButton");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let output5 = document.getElementById("output5");
let output6 = document.getElementById("output6");


icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        icon.src = "../images/icon-moon.svg";
    }
    else {
        icon.src = "../images/icon-sun.svg";
    }
}

//changes the color when clicking on the button
function changeColorButton () {
    if(this.style.background === "var(--borderColorHover)") {
        this.style.background = "var(--divColor)";
    }
    else {
        this.style.background = "var(--borderColorHover)";
    }
}

//changes the color when clicking on the info text
function changeColorText () {
    if(this.style.color === "var(--fontActive)") {
        this.style.color = "var(--fontColor2)";
    }
    else {
        this.style.color = "var(--fontActive)";
    }
}

//add todos
addButton.addEventListener("click", function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = newTodo.value;
    if (output1.hasChildNodes() === false) {
        output1.appendChild(paragraph);
        newTodo.value = " ";
    }
    else if (output2.hasChildNodes() === false) {
        output2.appendChild(paragraph);
        newTodo.value = " ";
    }
    else if (output3.hasChildNodes() === false) {
        output3.appendChild(paragraph);
        newTodo.value = " ";
    }
    else if (output4.hasChildNodes() === false) {
        output4.appendChild(paragraph);
        newTodo.value = " ";
    }
    else if (output5.hasChildNodes() === false) {
        output5.appendChild(paragraph);
        newTodo.value = " ";
    }
    else if (output6.hasChildNodes() === false) {
        output6.appendChild(paragraph);
        newTodo.value = " ";
    }
    else {
        alert("Please delete a todo!");
    }

})

function textTrough (button, text) {
    button.addEventListener('click', function () {
        if(button.style.background === "var(--divColor)") {
            text.style.textDecoration = 'none';
        }
        else {
            text.style.textDecoration = 'line-through';
        }
    })

}

radioButton1.onclick = changeColorButton;
textTrough(radioButton1, output1);
radioButton2.onclick = changeColorButton;
radioButton3.onclick = changeColorButton;
radioButton4.onclick = changeColorButton;
radioButton5.onclick = changeColorButton;
radioButton6.onclick = changeColorButton;

infoContainerAll.onclick = changeColorText;
infoContainerActive.onclick = changeColorText;
infoContainerCompleted.onclick = changeColorText;






