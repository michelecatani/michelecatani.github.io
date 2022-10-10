var theUrl = 'https://api.github.com/users/michelecatani/repos'
var projTemplate = document.getElementById('projTemplate');

function get_name(name, isFork) {
    if (isFork) return `${name} (fork)`;
    else return name;
}

function add_project(parent, json) {
    let curProject = projTemplate.content.cloneNode(true);
    curProject.querySelector('#projName').innerHTML = get_name(json.name, json.fork);
    curProject.querySelector('#projLink').href = json.html_url;
    curProject.querySelector('#projDescription').innerHTML = json.description;

    parent.appendChild(curProject);
}

async function letsFetch() {
    const response = await fetch(theUrl);
    console.log(response);
    const json = await response.json();
    console.log(json);
    let projectDiv = document.getElementById('projectsDisplay');
    json.forEach((element) => add_project(projectDiv, element));
}