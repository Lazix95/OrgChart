/* global objects */

var colorOfLines = "#8b0000";
var themeIndicatorm;
var nodeLookIndicator;
var selectValue;
var selectValueNode;
var selectThemeValue;
var body = document.getElementById("js-body");

//change theme;
function changeTheme(e) {
    selectValue = e.value;

    if (e.value === "Theme 1") {
        themeIndicator = "TH1";
        localStorage.setItem("themeIndicator", themeIndicator);
        localStorage.setItem("selectValue", selectValue);
        setTheme(themeIndicator);

    } else if (e.value === "Theme 2") {
        themeIndicator = "TH2";
        localStorage.setItem("themeIndicator", themeIndicator);
        localStorage.setItem("selectValue", selectValue);
        setTheme(themeIndicator);
    } else if (e.value === "Original") {
        themeIndicator = "default";
        localStorage.setItem("themeIndicator", themeIndicator);
        localStorage.setItem("selectValue", selectValue);
        setTheme(themeIndicator);
    } else if (e.value === "Quantox") {
        themeIndicator = "quantox";
        localStorage.setItem("themeIndicator", themeIndicator);
        localStorage.setItem("selectValue", selectValue);
        setTheme(themeIndicator);
    }
}

//set theme changes;
function setTheme(ti) {
    quantoxFlag = false;
    if (ti === "TH1") {
        selectThemeValue = "themeOne";
        if (selectValueNode) {
            setClass(body, "body " + nodeLookIndicator + "");
        } else {
            setClass(body, "body");
        }
        addClass(body, "themeOne");
        colorOfLines = "#000000";
        drawStuff();
    } else if (ti === "TH2") {
        selectThemeValue = "themeTwo";
        if (selectValueNode) {
            setClass(body, "body " + nodeLookIndicator + "");
        } else {
            setClass(body, "body");
        }
        addClass(body, "themeTwo");
        colorOfLines = "aqua";
        drawStuff();
    } else if (ti === "default") {
        selectThemeValue = "";
        if (selectValueNode) {
            setClass(body, "body " + nodeLookIndicator + "");
        } else {
            setClass(body, "body");
        }
        colorOfLines = "#8b0000";
        drawStuff();
    } else if (ti === "quantox") {
        selectThemeValue = "quantox";
        if (selectValueNode) {
            setClass(body, "body " + nodeLookIndicator + "");
        } else {
            setClass(body, "body");
        }
        addClass(body, "quantox")
        quantoxFlag = true;
        colorOfLines = "aqua";
        drawStuff();
    }
}


// change node look;
function changeNodeLook(e) {
    selectValueNode = e.value;
    if (e.value === "Horizontal") {
        nodeLookIndicator = "horizontal";
        localStorage.setItem("nodeLookIndicator", nodeLookIndicator);
        localStorage.setItem("selectValueNode", selectValueNode);
        setNodeLook(nodeLookIndicator);

    } else if (e.value === "Original") {
        nodeLookIndicator = "default";
        localStorage.setItem("nodeLookIndicator", nodeLookIndicator);
        localStorage.setItem("selectValueNode", selectValueNode);
        setNodeLook(nodeLookIndicator);
    } else if (e.value === "Small") {
        nodeLookIndicator = "small";
        localStorage.setItem("nodeLookIndicator", nodeLookIndicator);
        localStorage.setItem("selectValueNode", selectValueNode);
        setNodeLook(nodeLookIndicator);
    }
}

// set node look changes;
function setNodeLook(ti) {
    if (ti === "horizontal") {
        setClass(body, "body " + selectThemeValue + "");
        strSelect = 1;
        addClass(body, "horizontal");
        if (objects) {
            enterData();
        }
    } else if (ti === "default") {
        setClass(body, "body " + selectThemeValue + "");
        strSelect = 1;
        if (objects) {
            enterData();
        }
    } else if (ti === "small") {
        setClass(body, "body " + selectThemeValue + "");
        addClass(body, "small");
        strSelect = 2;
        if (objects) {
            enterData();
        }
    }
}

// load theme and node look;
function loadTheme() {
    themeIndicator = localStorage.getItem("themeIndicator");
    nodeLookIndicator = localStorage.getItem("nodeLookIndicator");
    if (themeIndicator) {
        selectValue = localStorage.getItem("selectValue");
        document.getElementById("js-select").value = selectValue;
        setTheme(themeIndicator);
    }else{
        setTheme("quantox");
    }
    if (nodeLookIndicator) {
        selectValueNode = localStorage.getItem("selectValueNode");
        document.getElementById("js-selectNode").value = selectValueNode;
        setNodeLook(nodeLookIndicator);
    }
}





