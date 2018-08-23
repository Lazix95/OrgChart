/*
 * Global strSelect
 */

// Global variables
var marginTopOfEveryLevel = 50;
var sideMargin = 30;
var heightOfElements = 200;
var selectedPersonID;
var selectedPerson;
var minID = 0;
var objects = null;
var strSelect = 1;
var str;
var str2;

// This function create nods and fill them with data
function fillData() {
    if ((strSelect == 1 || strSelect == 2) && editData) strSelect += 2;
    if (objects) {
        var parser = new DOMParser();
        var elem = document.getElementById("js-orgChart");
        elem.innerHTML = "";
        var i;
        for (i = 0; i < objects.length; i++) {
            elem.innerHTML += strOpt(i, strSelect);
        }
    }
}

// This function trow element to dropzone of its parent
function createHierarchy() {
    if (objects) {
        var i, j;
        var elems = document.getElementsByClassName("js-findObj");
        for (i = 0; i < objects.length; i++) {
            for (j = 0; j < objects.length; j++) {
                str = 'zoneToDtop' + [objects[i].id] + '';
                var zoneToDrop = document.getElementsByClassName(str)[0];
                if (elems[i].dataset.id == elems[j].dataset.parentid) {
                    zoneToDrop.innerHTML = zoneToDrop.innerHTML + elems[j].innerHTML;
                    elems[j].innerHTML = "";
                }
            }
        }
        findBossDropzone();
    }
}


// Get Height,width, x and y of every node
function fillArrayData() {
    if (objects) {
        for (var i = 0; i < objects.length; i++) {
            var elem = document.getElementById('id_' + objects[i].id + '').getBoundingClientRect();
            if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
                objects[i].x = elem.left;
                objects[i].y = elem.top;
                objects[i].width = elem.width;
                objects[i].height = elem.height;
            } else {
                objects[i].x = elem.x;
                objects[i].y = elem.y;
                objects[i].width = elem.width;
                objects[i].height = elem.height;
            }
        }
    }
}


function cloneObject(obj) {
    obj = JSON.stringify(obj);
    tmp = JSON.parse(obj);
}



// Load elements from local storge
function loadData() {
    data.open("get", 'http://ca.quantox.tech/chart/data.json', true)
    data.send();
}

// Load elements on start, check if Boss exist in local storge
function loadOnStart() {
    loadData();
}

// Get width of Bosses children
function setWidthOfOrgChart() {
    var windowWidth = getWidth() - 100;
    if (objects && document.getElementById("id_0")) {
        var IDs = [];
        var temp;
        var orgChartWidth = document.getElementById("id_0").offsetWidth;
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].parentID == 0) {
                temp = objects[i].id;
                IDs.push(temp);
            }
        }
        IDs.forEach(function (item) {
            orgChartWidth = orgChartWidth + document.getElementById(item).offsetWidth;
        });
        if (orgChartWidth > windowWidth) {
            document.getElementById("js-orgChart").style.width = orgChartWidth + "px";
        } else {
            document.getElementById("js-orgChart").style = "";
        }
    }
}

// Sets horizontal sctoll bar at middle
function setScrollbarPosition() {
    var element = document.getElementById("js-body");
    var maxScrollLeft = element.scrollWidth - element.clientWidth;
    maxScrollLeft = maxScrollLeft / 2;
    window.scrollTo(maxScrollLeft, window.pageYOffset);
}

// List of function to start on load
function start() {
    resizeCanvas();
    loadOnStart();
    enterData();
    loadTheme();
    drawStuff();
    handleNewHash()
    window.addEventListener('hashchange', handleNewHash, false);
}

// Add cass
function addClass(elem, name) {
    if (!hasClass(elem, name)) {
        var classString = elem.getAttribute("class");
        classString = classString + " " + name;
        elem.setAttribute("class", classString);
    }
}

// Remove class
function removesClass(elem, name) {
    var classString = elem.getAttribute("class");
    classString = classString.replace(name, "");
    classString = classString.replace("  ", "");
    elem.setAttribute("class", classString);
}

// Remove one and add another class
function exchangeClass(elem, class1, class2) {
    var classString = elem.getAttribute("class");
    classString = classString.replace(class1, class2);
    elem.setAttribute("class", classString);
}

// Set class
function setClass(elem, name) {
    elem.setAttribute("class", name);
}

// Check if element contain class
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

// Start on page load
window.onload = function () {
    start();

};