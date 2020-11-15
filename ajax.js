let new_quote = document.getElementById("generate-new-quote");

let themeColors = [
    "DarkMagenta",
    "DodgerBlue",
    "IndianRed",
    "LightSeaGreen",
    "Orange",
    "SlateGrey",
    "Teal",
    "Violet",
    "YellowGreen",
    "GoldenRod"
];

new_quote.addEventListener("click", function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var obj = JSON.parse(xhttp.responseText);
        document.getElementById("random-quote").innerHTML = obj.quote;
        document.getElementById("random-author").innerHTML = obj.author;
      }
    };

    xhttp.open("GET", "generate_quote.php", true);
    xhttp.send();

    changeTheme();
});

function changeTheme() {

    let primaryColor = document.querySelectorAll(".primary-color");
    let btns = document.querySelectorAll(".btn");
    let randomArrayIndex = Math.floor(Math.random() * themeColors.length);
    let randomColor = themeColors[randomArrayIndex];

    for (let i = 0; i < primaryColor.length; i++) {
        primaryColor[i].style.backgroundColor = randomColor;
        primaryColor[i].style.color = randomColor;
    }

    // convert button text color to white
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.color = "white";
    }
}