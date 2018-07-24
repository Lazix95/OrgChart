
/*
 *  Global objects, modalContent2 
 */

var clr = false;
var dragged;
var eventElem;
var array = [];
var dragGhost;

// Events fired on the draggable target 
document.addEventListener("drag", function (event) {
    array = [];
    getNodeTree(dragged);
    for (var i = 0; i < objects.length; i++) {
        var id = "id_" + objects[i].id + "";
        if (dragged.dataset.id != objects[i].id  && !hasClass(document.getElementById(id), "addDashBorder") && dragged.dataset.parentid != objects[i].id) {
            console.log("dawdaw");
            addClass(document.getElementById(id), "addDashBorder");
            drawStuff();
        }
    }
}, false);

// Event listener for drag start
document.addEventListener("dragstart", function (event) {
    if (event.target.dataset.id && event.target.dataset.id != 0) {
        event.dataTransfer.setData('application/node type', this);
        dragged = event.target;
        addClass(event.target.childNodes[1], "addOpacity");
    } else {
        event.preventDefault();
    }
}, true);

// Event listener for drag end
document.addEventListener("dragend", function (event) {
    for (var i = 0; i < objects.length; i++) {
        var id = "id_" + objects[i].id + "";
        if (dragged.dataset.id != objects[i].id) {
            removesClass(document.getElementById(id), "addDashBorder");
            drawStuff();
        }
    }
    removesClass(event.target.childNodes[1], "addOpacity");
}, false);

// Event listener for drag over, set background of "drop zone" element
document.addEventListener("dragover", function (event) {
    event.preventDefault();
    if (event.target.className == "dragHere"  && dragged.dataset.parentid != event.target.parentNode.parentNode.dataset.id) {
        addClass(event.target.parentNode.parentNode, "dragHereColor");
    }
}, false);

// Reset background of drag zone
document.addEventListener("dragleave", function (event) {
    if (event.target.className == "dragHere") {
        removesClass(event.target.parentNode.parentNode, "dragHereColor");
    }
}, false);

// Drop event listener
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (dragged.dataset.parentid != event.target.parentNode.parentNode.dataset.id) {
        if (event.target.className == "dragHere" && dragged.childNodes[3] && dragOrNot(event.target)) {
            eventElem = event;
            addClass(document.getElementById("js-mySimpleModal"), "question");
            document.getElementById("js-modalContent").innerHTML = modalContent2;
            addClass(document.getElementById("js-body"), "modalShown");
            removesClass(event.target.parentNode.parentNode, "dragHereColor");
        } else if (event.target.className == "dragHere" && dragged.childNodes[3] && !dragOrNot(event.target)) {
            switchPlaces(dragged, event.target);
        } else {
            dropNode(event, false);
        }
    } else {
        removesClass(event.target.parentNode.parentNode, "dragHereColor");
    }

}, false);