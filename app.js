(function () {
    document.getElementById("screen-width").innerHTML = screen.width;
    document.getElementById("screen-height").innerHTML = screen.height;
    document.getElementById("browser-width").innerHTML = window.innerWidth;
    document.getElementById("browser-height").innerHTML = window.innerHeight;
})();


function getWidthHeight() {
    document.getElementById("screen-width").innerHTML = screen.width;
    document.getElementById("screen-height").innerHTML = screen.height;
    document.getElementById("browser-width").innerHTML = window.innerWidth;
    document.getElementById("browser-height").innerHTML = window.innerHeight;
    document.getElementById("music").play();
}

var secondWindow;

function openWin() {
    secondWindow = window.open("index2.html", "", "width=150, height=150");
}

function changeMeasurement() {
    const inputHeight = document.getElementById("input-height").value;
    const inputWidth = document.getElementById("input-width").value;
    secondWindow.resizeTo(Number(inputHeight) + 16, Number(inputWidth) + 66);
    secondWindow.focus();
}