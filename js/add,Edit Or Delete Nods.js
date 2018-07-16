/* global objects, parentElem, modal */

function enterNewPerson() {
    var name = document.getElementById("js-name").value;
    var surname = document.getElementById("js-surname").value;
    var job = document.getElementById("js-job").value;
    minID += 1;
    var newPerson = {
        id: minID,
        parentID: parentElem.dataset.id,
        "name": name,
        "surname": surname,
        "job": job,
        picture: document.getElementById("js-myCustomImage").src
    };
    objects.push(newPerson);
    enterData();
    closeModal();
}

// call modal for edit node
function editModalSettings(elem) {
    document.getElementById("js-modalContent").innerHTML = modalContent;
    edit = true;
    parentElem = elem;

    for (var i = 0; i < objects.length; i++) {
        if (parentElem.dataset.id == objects[i].id) {
            document.getElementById("js-myCustomImage").src = objects[i].picture;
            var name = document.getElementById("js-name").value = objects[i].name;
            var surname = document.getElementById("js-surname").value = objects[i].surname;
            var job = document.getElementById("js-job").value = objects[i].job;
        }
    }
    document.getElementById("js-modalTitle").innerHTML = "EDIT PERSON";
    addClass(document.getElementsByTagName("BODY")[0], "modalShown");

}

// save edited settings 
function editPerson() {
    var name = document.getElementById("js-name").value;
    var surname = document.getElementById("js-surname").value;
    var job = document.getElementById("js-job").value;
    for (var i = 0; i < objects.length; i++) {
        if (parentElem.dataset.id == objects[i].id) {
            objects[i].name = name;
            objects[i].surname = surname;
            objects[i].job = job;
            objects[i].picture = document.getElementById("js-myCustomImage").src;
        }
    }
    edit = false;
    enterData();
    closeModal();
}

//call modal for addeding new boss
function addBossModalSettings() {
    document.getElementById("js-modalContent").innerHTML = modalContent;
    addBossFlag = true;
    document.getElementById("js-modalTitle").innerHTML = "ADD NEW BOSS";
    addClass(document.getElementsByTagName("BODY")[0], "modalShown");

}

//saves new bos
function addBoss() {
    var name = document.getElementById("js-name").value;
    var surname = document.getElementById("js-surname").value;
    var job = document.getElementById("js-job").value;
    minID = 0;
    var newBoss = {
        id: minID,
        parentID: null,
        "name": name,
        "surname": surname,
        "job": job,
        picture: 'img/userPicture.png'
    };
    objects = [];
    addBossFlag = false;
    addClass(document.getElementById("js-bossButton"), "buttonHidden")
    objects.push(newBoss);
    enterData();
    closeModal();
}

// uploads picture
var openFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        TheFileContents = reader.result;
        document.getElementById("js-TheImageContents").innerHTML = '<img id="js-myCustomImage" width="200" src="' + TheFileContents + '" />\n\
                     <input type="file" accept="images/*" onchange="openFile(event);" class="choseFile">\n\
                        <button class="choseFileButton" onclick="clickChoseFile();">Chose File</button>';
    };
    reader.readAsDataURL(input.files[0]);
};

// delete node
function deletePerson(elem) {
    var deletedId, deletedParentId;
    if (elem.dataset.parentid == "null") {
        return;
    }
    ;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].id == elem.dataset.id) {
            deletedId = objects[i].id;
            deletedParentId = objects[i].parentID;
            objects.splice(i, 1);
        }
    }
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].parentID == deletedId) {
            objects[i].parentID = deletedParentId;
        }
    }
    enterData();
    setWidthOfOrgChart();
    drawStuff();
}

// set of functions for reinitialization
function enterData() {
    saveToLocalStorge();
    fillData();
    createHierarchy();
    setWidthOfOrgChart();
    fillArrayData();
    drawStuff();
    setScrollbarPosition();
}

//adds class "emptyDropzone" for empty dropzones
function findBossDropzone() {
    temp = document.getElementsByClassName("js-findObj");
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].dataset.id != 0) {
            addClass(temp[i], "emptyDropzone");
        }
    }
}

