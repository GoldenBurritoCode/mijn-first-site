let username;
const title = document.getElementById("title");
const submBtn = document.getElementById("mySubmit");
function clickedSubm() {
    username = document.getElementById("in1").value
    title.textContent = `Welkom ${username}!`;
    submBtn.textContent = "ga naar rekenmachine";
    document.getElementById("usInLab").style.display = "none";
    document.getElementById("in1").style.display = "none";
    document.getElementById("undTitle").textContent = "Welkom op de site";
}