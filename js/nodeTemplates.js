
// Returns string for creation of nodes
function strOpt(i, a){
var strOpt1 = '<div class="dropzone  js-findObj" data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '" >\n\
            <div id="' + objects[i].id + '"  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  class="dropzone zoneToDtop' + objects[i].id + '" id="draggable" draggable="true" ondragstart="" id="' + objects[i].id + '" >\n\
            <div class="myThumbNaill" id="id_' + objects[i].id + '">\n\
            <div class="spaceForPicture"><img src="' + objects[i].picture + '"></div> <div class="text">\n\
            <p>Name: ' + objects[i].name + '</p> <p>Surname: ' + objects[i].surname + '</p> <p>Job: ' + objects[i].job + '</p>\n\
            \n\
            \n\
            \n\
            </div>\n\
            <div class="controlButtons" data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"><div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="edit" class="pen" onclick="editModalSettings(this)"><img class="icon_1" src="img/control buttons/pancil.png" alt=""/></div>\n\
            <div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="delete" class="trash" onclick="deletePerson(this);"><img class="icon_2" src="img/control buttons/trashCan.png" alt=""/></div>\n\
            <div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="plus" class="plus" onclick="openModal(this);"><img icon_3 src="img/control buttons/addIcon.png" alt=""/></div></div>\n\
            \n\
            <p class="dragHere">Drag Here</p><hr> </div></div></div>';
        var strOpt2 = '<div class="dropzone  js-findObj" data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '" >\n\
            <div id="' + objects[i].id + '"  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  class="dropzone zoneToDtop' + objects[i].id + '" id="draggable" draggable="true" ondragstart="" >\n\
            <div class="myThumbNaill" id="id_' + objects[i].id + '">\n\
            <div class="spaceForPicture"><img src="' + objects[i].picture + '"></div> <div class="text">\n\
            <p>' + objects[i].name + ' ' + objects[i].surname + '</p>\n\
            <p>' + objects[i].job + '</p>\n\
            \n\
            \n\
            </div>\n\
            <div class="controlButtons" data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"><div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="edit" class="pen" onclick="editModalSettings(this)"><img class="icon_1" src="img/control buttons/pancil.png" alt=""/></div>\n\
            <div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="delete" class="trash" onclick="deletePerson(this);"><img class="icon_2" src="img/control buttons/trashCan.png" alt=""/></div>\n\
            <div  data-id="' + objects[i].id + '" data-parentid="' + objects[i].parentID + '"  id="plus" class="plus" onclick="openModal(this);"><img icon_3 src="img/control buttons/addIcon.png" alt=""/></div></div>\n\
            \n\
            <p class="dragHere">Drag Here</p><hr> </div></div></div>';
        if (a == 1){
            return strOpt1;
        }
        if (a == 2){
            return strOpt2;
        }
}

// Add and edit modal content
var modalContent = '<div id="js-TheImageContents" class="theImageContents">\n\
    <img id="js-myCustomImage" src="img/userPicture.png" alt="CustomImage"> \n\
    <input type="file" accept="images/*" onchange="openFile(event);" class="choseFile" id="js-choseFile">\n\
    <button class="choseFileButton" onclick="clickChoseFile();"><img src="img/upload.png" alt="upload"/> <p>Chose Picture</p></button>\n\
    </div>\n\
    <p id="js-modalTitle" class="modalTitle"></p>\n\
    <input type="text" id="js-name" placeholder="Name" value="">\n\
    <p class="error" id="js-nameError"></p>\n\
    <input type="text" id="js-surname" placeholder="surname" value="">\n\
    <p class="error" id="js-surnameError"></p>\n\
    <input type="text" id="js-job" placeholder="job" valu\n\e="">\n\
    <p class="error" id="js-jobError"></p> \n\
    <button id="js-closeButton" onclick="closeModal();">Close</button>\n\
    <button id="js-Button" onclick="validateInput();">Save</button>'

// Chose modal content
var modalContent2 = '\<p class="choseTitle">Chose</p><p class="close" onclick="closeModal();">&times;</p><hr>\n\
<p class="question">How many elements you want to move?</p>\n\
                <button class="only" onclick="dropNode(eventElem,false)">Only dragged element!</button>\n\
                <button class="all" onclick="dropNode(eventElem,true)">All Elements!</button>'