var idToken = null;
var userId = null;
var alertShown = false;

var data = new XMLHttpRequest();

// Execute on data response
data.onload = function () {
    var body = JSON.parse(this.response);
    if (data.status >= 200 && data.status < 400 && body) {
        addClass(document.getElementById("js-loading"), "hideLoading")
        if (!body.json) {
            objects = null;
            minId = null;
            removesClass(document.getElementById("js-bossButton"), "buttonHidden");
            return
        }
        objects = body.json.objects;
        minID = body.json.minID;
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
    var dataToSave = {
        objects: objects,
        minID: minID
    }
    var request = {
        username: username,
        password: password,
        json: dataToSave
    }

    data.open("post", 'http://ca.quantox.tech/chart/treeadmin.php', true)
    data.send(JSON.stringify(request))
}