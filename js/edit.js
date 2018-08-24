var editData = false
var loggedIn = false
var username = null;
var password = null;
var tmp = [];

var admin = {
    email: "admin@admin.com",
    password: "adminadmin"
}

function handleNewHash() {
    if ((window.location.hash != "#/edit" && window.location.hash != "#/" || window.location.hash == "#/")) {
        window.location.hash = "/"
        addClass(document.getElementById("js-bossButton"), "buttonHidden");
        LogOut(editData);
        editData = false;
    } else if (window.location.hash == "#/edit" && !editData) {
        editData = true;
        start();
    }
}

function LogOut(state) {
    if (state) {
        var controll = document.querySelectorAll(".controlButtons")
        for (var i = 0; i < controll.length; i++) {
            addClass(controll[i], "disabledControll")
        }
        var controll = document.querySelectorAll(".dragHere")
        for (var i = 0; i < controll.length; i++) {
            addClass(controll[i], "disabledControll")
        }
    }
    fillArrayData();
    drawStuff();
}


function logIn(e) {
    removesClass(document.getElementById("js-body"),"loginModalShown");
    username = e.target.username.value;
    password = e.target.password.value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    sendRequest();
}