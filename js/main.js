index = 0;
let magicDiv = document.getElementById("magicHappens");

const messages = [
    "Experienced Data Engineer",
    "Computer Science Graduate",
    "Lifelong learner"
]

function changeDiv() {
    opacity = 1;
    magicDiv.innerHTML = `
        <p>
            ${messages[index % messages.length]}
        </p>
    `;
    index += 1;
    setTimeout(changeDiv, 8000);
}

changeDiv();