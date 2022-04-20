
// FETCH DATA 
// PARSE DATA
// ACT ON DATA
// CATCH ERRORS

function hello() {
    document.getElementById("demo").innerHTML = "Hello Javascsssssasdfript"
}

function showLeetCodeVideos() {
    document.getElementById("leetCodeVideos").innerHTML =
    `
    <div class="d-flex flex-row">
        <div class="p-2">
            <iframe src="https://www.youtube.com/embed/1JKE0obkftg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>
        </div>
        <div class="p-2">
            <iframe src="https://www.youtube.com/embed/HEsbA5gvpoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>
        </div>
    </div>
    `

    document.getElementById("leetCodeButton").innerHTML = `<button onClick="hideLeetCodeVideos()" class="btn btn-primary" id="leetCodeButton">Hide Videos</button>`
}

function hideLeetCodeVideos() {
    document.getElementById("leetCodeVideos").innerHTML = ""

    document.getElementById("leetCodeButton").innerHTML = `<button onClick="showLeetCodeVideos()" class="btn btn-primary" id="leetCodeButton">Show Videos</button>`
}

function showAerialVideos() {
    document.getElementById("aerialVideos").innerHTML = 
    `
    <div class="d-flex flex-row">
        <div class="p-2">
            <iframe src="https://www.youtube.com/embed/_7WbmHrZx44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>
        </div>
        <div class="p-2">
            <iframe src="https://www.youtube.com/embed/AtyszgS4Vqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>
        </div>
    </div>
    `
    document.getElementById("aerialButton").innerHTML = `<button onClick="hideAerialVideos()" class="btn btn-primary" id="aerialButton">Hide Videos</button>`
}

function hideAerialVideos() {
    document.getElementById("aerialVideos").innerHTML = ""

    document.getElementById("aerialButton").innerHTML = `<button onClick="showAerialVideos()" class="btn btn-primary">See Videos</button>`
}