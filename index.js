let username;
let times;
const title = document.getElementById("title");
const submBtn = document.getElementById("mySubmit");
function clickedSubm() {
    times ++;
    if (times === 1) {
        username = document.getElementById("in1").value;
        title.textContent = `Welkom ${username}!`;
        submBtn.textContent = "ga naar rekenmachine";
        document.getElementById("usInLab").style.display = "none";
        document.getElementById("in1").style.display = "none";
        document.getElementById("undTitle").textContent = "Welkom op de site";
    }
    else if (times === 2) {
        window.location.href = "calc/calc.html"
    }
}
    
