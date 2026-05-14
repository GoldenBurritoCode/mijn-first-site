let username;
let times;
let dataUser;
const title = document.getElementById("title");
const submBtn = document.getElementById("mySubmit");
function clickedSubm() {
    times ++;
    if (times === 1) {
        username = document.getElementById("in1").value;
        try{
            fetch("users.json")
                .then(response => response.json())
                .then(data => 
                    {dataUser = data;
                });
        }
        catch(error) {
            window.alert(error);
        }
        title.textContent = `account: ${username}`;
        submBtn.textContent = "ga naar rekenmachine";
        document.getElementById("usInLab").style.display = "none";
        document.getElementById("in1").style.display = "none";
        document.getElementById("undTitle").textContent = "Welkom op de site";
    }
    else if (times === 3) {
        window.location.href = "calc/calc.html"
    }
    else if (times === 2) {

    }
}
    
