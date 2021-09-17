
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

let clear = document.getElementById('infoContainerClear');
let counterDiv = document.getElementById('counterDiv');
let containerCount = 0;

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

//add todos; item left plus
    addButton.addEventListener("click", function () {
        var paragraph = document.createElement('p');
        paragraph.innerText = newTodo.value;
        containerCount++;
        counterDiv.innerText = containerCount + ' item left';
        if (output1.hasChildNodes() === false) {
            output1.appendChild(paragraph);
            newTodo.value = " ";
        } else if (output2.hasChildNodes() === false) {
            output2.appendChild(paragraph);
            newTodo.value = " ";
        } else if (output3.hasChildNodes() === false) {
            output3.appendChild(paragraph);
            newTodo.value = " ";
        } else if (output4.hasChildNodes() === false) {
            output4.appendChild(paragraph);
            newTodo.value = " ";
        } else if (output5.hasChildNodes() === false) {
            output5.appendChild(paragraph);
            newTodo.value = " ";
        } else if (output6.hasChildNodes() === false) {
            output6.appendChild(paragraph);
            newTodo.value = " ";
        } else {
            alert("Please delete a todo!");
        }

    })


//click to cross out the text; item left minus
function textTrough (button, text) {
    button.addEventListener('click', function () {
        if(button.style.background === "var(--divColor)") {
            text.style.textDecoration = 'none';
        }
        else {
            text.style.textDecoration = 'line-through';
            containerCount--;
            counterDiv.innerText = containerCount + ' item left';
        }
    })

}

//delete completed todos
function clearCompleted (text, button) {
    clear.addEventListener('click', function () {
        if(text.style.textDecoration === 'line-through') {
            text.removeChild(text.firstChild);
            button.style.background = "var(--divColor)";
            text.style.textDecoration = 'none';
        }
    })
}

//show all Completed
function showCompleted (text) {
    infoContainerCompleted.addEventListener('click', function () {
        infoContainerCompleted.style.color = "var(--fontActive)";
        infoContainerActive.style.color = "var(--fontColor2)";
        infoContainerAll.style.color = "var(--fontColor2)";
        if(text.style.textDecoration === 'line-through') {
            text.style.color = 'var(--fontColor2)';
        }
        else {
            text.style.color = 'var(--divColor)';
        }
    })
}

//show all Active
function showActive (text) {
    infoContainerActive.addEventListener('click', function () {
        infoContainerActive.style.color = 'var(--fontActive)';
        infoContainerCompleted.style.color = 'var(--fontColor2)';
        infoContainerAll.style.color = 'var(--fontColor2)';
        if(text.style.textDecoration === 'line-through') {
            text.style.color = 'var(--divColor)';
        }
        else {
            text.style.color = 'var(--fontColor2)';
        }
    })
}

//show All
function showAll (text) {
    infoContainerAll.addEventListener('click', function () {
        infoContainerAll.style.color = 'var(--fontActive)';
        infoContainerCompleted.style.color = 'var(--fontColor2)';
        infoContainerActive.style.color = 'var(--fontColor2)';
        if(text.style.textDecoration === 'line-through') {
            text.style.color = 'var(--fontColor2)';
        }
        else {
            text.style.color = 'var(--fontColor2)';
        }
    })

}




radioButton1.onclick = changeColorButton;
textTrough(radioButton1, output1);
radioButton2.onclick = changeColorButton;
textTrough(radioButton2, output2);
radioButton3.onclick = changeColorButton;
textTrough(radioButton3, output3);
radioButton4.onclick = changeColorButton;
textTrough(radioButton4, output4);
radioButton5.onclick = changeColorButton;
textTrough(radioButton5, output5);
radioButton6.onclick = changeColorButton;
textTrough(radioButton6, output6);

clearCompleted(output1, radioButton1);
clearCompleted(output2, radioButton2);
clearCompleted(output3, radioButton3);
clearCompleted(output4, radioButton4);
clearCompleted(output5, radioButton5);
clearCompleted(output6, radioButton6);

showCompleted(output1);
showCompleted(output2);
showCompleted(output3);
showCompleted(output4);
showCompleted(output5);
showCompleted(output6);

showActive(output1);
showActive(output2);
showActive(output3);
showActive(output4);
showActive(output5);
showActive(output6);

showAll(output1);
showAll(output2);
showAll(output3);
showAll(output4);
showAll(output5);
showAll(output6);




