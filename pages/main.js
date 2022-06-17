//On startup, save localstorage of current state
function initialize(){
    let darkmode = true;
    localStorage.setItem('bool', true);
}

function startUp() {
    //on startup of each page to maintain consistency
    var darkbutton = document.getElementById("darkbutton");
    var all = document.getElementsByTagName("*");

    darkmode = localStorage.getItem('bool');
    if (darkmode === 'true'){
        //set it to light
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--section-color", "rgb(173, 255, 201)");
        document.documentElement.style.setProperty("--loading-color", "navy");
        document.documentElement.style.setProperty("--background", "url(../images/day.jpg)");


        document.documentElement.style.setProperty("--table-side-color", "rgb(173, 255, 201)");
        document.documentElement.style.setProperty("--table-row-light", "rgb(191, 234, 255)");
        document.documentElement.style.setProperty("--table-row-dark", "rgb(190, 222, 255)");

        document.documentElement.style.setProperty("--link-color", "blue");
        document.documentElement.style.setProperty("--link-visited", "purple");

        darkbutton.textContent = "🌑";
    }
    else {
        //set it to dark
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--section-color", "rgb(81, 13, 116)");
        document.documentElement.style.setProperty("--loading-color", "rgb(30, 0, 85)");
        document.documentElement.style.setProperty("--background", "url(../images/night.jpg)");

        document.documentElement.style.setProperty("--table-side-color", "rgb(81, 13, 116)");
        document.documentElement.style.setProperty("--table-row-light", "rgb(22, 22, 94)");
        document.documentElement.style.setProperty("--table-row-dark", "rgb(6, 6, 71)");

        document.documentElement.style.setProperty("--link-color", "rgb(247, 100, 132)");
        document.documentElement.style.setProperty("--link-visited", "rgb(155, 155, 70)");

        darkbutton.textContent = "☀️";
    }
}


function DarkMode() {
    var darkbutton = document.getElementById("darkbutton");
    var all = document.getElementsByTagName("*");

    darkmode = localStorage.getItem('bool');
    if (darkmode === 'false'){
        //set it to light
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--section-color", "rgb(173, 255, 201)");
        document.documentElement.style.setProperty("--loading-color", "navy");
        document.documentElement.style.setProperty("--background", "url(../images/day.jpg)");


        document.documentElement.style.setProperty("--table-side-color", "rgb(173, 255, 201)");
        document.documentElement.style.setProperty("--table-row-light", "rgb(191, 234, 255)");
        document.documentElement.style.setProperty("--table-row-dark", "rgb(190, 222, 255)");

        document.documentElement.style.setProperty("--link-color", "blue");
        document.documentElement.style.setProperty("--link-visited", "purple");

        darkbutton.textContent = "🌑";

        localStorage.clear();
        localStorage.setItem('bool', true);
        //document.cookie = "darkmode=false"; add cookies once hosted
    }
    else {
        //set it to dark
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--section-color", "rgb(81, 13, 116)");
        document.documentElement.style.setProperty("--loading-color", "rgb(30, 0, 85)");
        document.documentElement.style.setProperty("--background", "url(../images/night.jpg)");


        document.documentElement.style.setProperty("--table-side-color", "rgb(81, 13, 116)");
        document.documentElement.style.setProperty("--table-row-light", "rgb(22, 22, 94)");
        document.documentElement.style.setProperty("--table-row-dark", "rgb(6, 6, 71)");

        document.documentElement.style.setProperty("--link-color", "rgb(247, 100, 132)");
        document.documentElement.style.setProperty("--link-visited", "rgb(155, 155, 70)");

        darkbutton.textContent = "☀️";

        localStorage.clear();
        localStorage.setItem('bool', false);
        //document.cookie = "darkmode=true"; add cookies once hosted
    }
    //darkmode = !darkmode;
}

