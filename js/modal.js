/* global modalContent */

// Get modal element
var modal = document.getElementById('js-mySimpleModal');
var modalSettings = document.getElementById('js-mySimpleModalSettings');
var closeBtn = document.getElementById("js-closeButton");
var parentElem;
var edit = false;
var addBossFlag = false;

// Listen for clicks
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideSettingsClick);

//open modal
function openModal(elem) {
    document.getElementById("js-modalContent").innerHTML = modalContent;
    document.getElementById("js-modalTitle").innerHTML = "ADD NEW PERSON";
    document.getElementById("js-myCustomImage").src = "img/userPicture.png";
    parentElem = elem;
    addClass(document.getElementById("js-body"),"modalShown");
}

// open settings modal
function openSettingsModal() {
    addClass(document.getElementById("js-body"),"modalShownSettings");
}

// close add, edit nodes modal
function closeModal() {
    removesClass(document.getElementById("js-mySimpleModal"),"question");
     document.getElementById("js-modalContent").innerHTML = modalContent;
     removesClass(document.getElementById("js-body"),"modalShown");
    var name = document.getElementById("js-name");
    var surname = document.getElementById("js-surname");
    var job = document.getElementById("js-job");
    if (name.value !== null) {
        document.getElementById("js-name").value = "";
    }
    if (surname.value !== null) {
        document.getElementById("js-surname").value = "";
    }
    if (job.value !== null) {
        document.getElementById("js-job").value = "";
    }
    cleanErrorMessages();
    edit = false;
}

// outside click function
function outsideClick(e) {
    if (e.target == modal) {
        closeModal();
    }
}

// close settings modal
function closeModalSettings() {
    startAnimationReverse();
    removesClass(document.getElementById("js-body"),"modalShownSettings");
}

// outside settings modal click function
function outsideSettingsClick(e) {
    if (e.target === document.getElementById("js-mySimpleModalSettings")) {
        closeModalSettings();
    }

}

// settings modal animation listener
document.getElementById("js-settings").onclick = function () {
    startAnimation();
    openSettingsModal();
};

// animation at modal open;
function startAnimation() {
    if (hasClass(document.getElementById("js-settings"),"settingAnimationReverse")){
        exchangeClass(document.getElementById("js-settings"),"settingAnimationReverse","settingAnimation");
    }else{
        addClass( document.getElementById("js-settings"),"settingAnimation");
    }
    
}

// animation at modal close
function startAnimationReverse() {
    exchangeClass(document.getElementById("js-settings"),"settingAnimation","settingAnimationReverse");
}

// upload picture event click trigger;
function clickChoseFile() {
    document.getElementById("js-choseFile").click();
}





