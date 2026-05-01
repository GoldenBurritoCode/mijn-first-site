const json = document.getElementById("data").textContent;
const data = json.parse(json)
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("in1").value
    document.getElementById("title").textContent = `Welkom ${username}!`
    document.getElementById("mySubmit").textContent = "ga naar rekenmachine"
    document.getElementById("txt").style.display = data
    document.getElementById("usInLab").style.display = "none"
    document.getElementById("in1").style.display = "none"
    document.getElementById("undTitle").textContent = "Welkom op de site"
}