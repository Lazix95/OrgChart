/* global objects, dragged */

//returns answer if node is child of "dragged" node
function dragOrNot(elem) {
    var temp = elem;
    if (temp.parentNode.parentNode.id != 0) {
        array = [];
        getNodeTree(dragged);
        if (includes(array,temp.parentNode.parentNode.id) === false) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

// returns array of childs of "dragged" node;
function getNodeTree(node) {
    if (node.hasChildNodes()) {
        var children = [];
        for (var j = 0; j < node.childNodes.length; j++) {
            children.push(getNodeTree(node.childNodes[j]));
            if (node.dataset.id && node.dataset.id != dragged.dataset.id && includes(array,node.dataset.id) === false) {
                array.push(node.dataset.id);
            }
        }
        return {
            nodeName: node.dataset.id,
            parentName: node.parentNode.nodeName,
            children: children,
            content: node.innerText || ""
        };
    }
    return false;
}

// remove elements without "dropzone" class;
function filterChilds(elem) {
    var filteredChilds = [];
    elem = elem.childNodes;
    elem.forEach(function (obj) {
        if (hasClass(obj, "dropzone")) {
            filteredChilds.push(obj);
        }
    });
    return filteredChilds;
}

// drop node into dropzone;
function dropNode(event, dropFlag) {
    if (event.target.className == "" && null && dragOrNot(event.target)) {
        event.target.style.background = "";
    } else if (event.target.className == "dragHere") {
        if (dragged.dataset.id != event.target.parentNode.parentNode.dataset.id && dragOrNot(event.target)) {
            for (var i = 0; i < objects.length; i++) {
                if (dragged.dataset.id == objects[i].id) {
                    if (dragged.childNodes[3] && !dropFlag) {
                        var movedParentId = dragged.dataset.parentid;
                        var filteredNodes = filterChilds(dragged);
                        filteredNodes.forEach(function (child) {
                            for (var j = 0; j < objects.length; j++) {
                                if (objects[j].id == child.dataset.id) {
                                    objects[j].parentID = movedParentId;
                                }
                            }
                        });
                    }
                    objects[i].parentID = event.target.parentNode.parentNode.dataset.id;
                }
            }
            enterData();
        }
        event.target.style.background = "";
        closeModal();
    }
}

// check if array includes number;
function includes(myArray,numb){
    for(var i = 0;i<myArray.length;i++){
       if (myArray[i] == numb){
            return true;
       }
    }
    return false;
}
