var idToken = null;
var userId = null;
var alertShown = false;

var singIn = new XMLHttpRequest();
var data = new XMLHttpRequest();

// Execute on singIn response
singIn.onload = function () {
    var data = JSON.parse(this.response);
    if (singIn.status >= 200 && singIn.status < 400) {
        if (alertShown) closeAlert()
        loggedIn = true;
        if (!localStorage.getItem("username") && !localStorage.getItem("password")){
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
        }
        idToken = data.idToken;
        userId = data.localId;
        start();
    }else{
        console.log(data.error.message)
        showAlert(data.error.message)
    }
}

// Execute on data response
data.onload = function () {
    var body = JSON.parse(this.response);
    if (data.status >= 200 && data.status < 400 && body) {
        addClass(document.getElementById("js-loading"), "hideLoading")
        objects = body.objects;
        minID = body.minID;
        fillData();
        createHierarchy();
        setWidthOfOrgChart();
        fillArrayData()
        drawStuff()
        setScrollbarPosition();
    } else if (objects == null && loggedIn) {
        removesClass(document.getElementById("js-bossButton"), "buttonHidden");
    }
}

// Show alert if singIn response with error
function showAlert(content){
    alertShown = true;
    content = content.toLowerCase();
    content = content.replace(/_/g, " ");
    content = toUpperCase(content)
    document.getElementById("js-alertContent").innerHTML = content;
    removesClass(document.getElementById("js-loginAlert"), " alertHidden")
}

// Close alert message
function closeAlert(){
    addClass(document.getElementById("js-loginAlert"), " alertHidden")
}