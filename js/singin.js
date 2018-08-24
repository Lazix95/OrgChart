var idToken = null;
var userId = null;
var alertShown = false;
var data = new XMLHttpRequest();
var saveData = new XMLHttpRequest();

// Execute on data response
data.onload = function () {
    var body = JSON.parse(this.response);
    if (data.status >= 200 && data.status < 400 && body) {
        addClass(document.getElementById("js-loading"), "hideLoading")
        if (!body.json && !objects && editData) {
            objects = null;
            removesClass(document.getElementById("js-bossButton"), "buttonHidden");
            return
        } else if (!body.json) {      // Delete this row at the end, it is jus when we can not save Boss node
            return
        }
        objects = body.json;
        fillData();
        createHierarchy();
        setWidthOfOrgChart();
        fillArrayData()
        drawStuff()
        setScrollbarPosition();
    }
}

// Saves changes on server
function saveChanges() {
    if (!localStorage.getItem("username") || !localStorage.getItem("password")) {
        addClass(document.getElementById("js-body"), "  loginModalShown")
    } else {
        username = localStorage.getItem("username");
        password = localStorage.getItem("password")
        sendRequest()
    }
}

function sendRequest() {
    objects.minID = minID;
    var request = {
        username: username,
        password: password,
        json: objects
    }

    saveData.open("post", 'http://ca.quantox.tech/chart/treeadmin.php', true)
    var str = JSON.stringify(request);
    saveData.send(str)
}

// Load elements from local storge
function loadData() {
    data.open("get", 'http://ca.quantox.tech/chart/data.json', true)
    data.send();
}

saveData.onload = function () {
    console.log(this.response)
    console.log('​saveData.onload -> ');
}