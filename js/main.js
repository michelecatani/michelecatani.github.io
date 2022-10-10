index = 0;
let magicDiv = document.getElementById("magicHappens");

const messages = [
    "Data Engineering Co-op at Teck Resources",
    "Comp Sci student at University of Windsor",
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