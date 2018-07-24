/*
 *  Global edit, addBossFlag 
*/

// Input validation;
function validateInput() {
    var nameOk = true;
    var surnameOk = true;
    var jobOK = true;
    var name = document.getElementById("js-name");
    var surname = document.getElementById("js-surname");
    var job = document.getElementById("js-job");
    var nameError = document.getElementById("js-nameError");
    var surnameError = document.getElementById("js-surnameError");
    var jobError = document.getElementById("js-jobError");
    cleanErrorMessages();

    // Error message for name input
    if (name.value === "") {
        nameError.innerHTML = "Name is required!";
        nameOk = false;
    } else if (name.value.length < 3) {
        nameError.innerHTML = "Enter minimum 3 characters!";
        nameOk = false;
    } else {
        name.value = toUpperCase(name.value);
    }

    //Error message for surname input
    if (surname.value == "") {
        addClass(job,"inputError");
        surnameError.innerHTML = "Surname is required!";
        surnameOk = false;
    } else if (surname.value.length < 3) {
        surnameError.innerHTML = "Enter minimum 3 characters!";
        surnameOk = false;
    } else {
        surname.value = toUpperCase(surname.value);
    }

    //Error message for job input
    if (job.value == "") {
        jobError.innerHTML = "Job is required!";
        jobOK = false;
    } else if (job.value.length < 3) {
        jobError.innerHTML = "Enter minimum 3 characters!";
        jobOK = false;
    } else {
        job.value = toUpperCase(job.value);
    }

    // If everything is ok, edit and addBoss flags are "false", add new person
    if (nameOk && surnameOk && jobOK && !edit && !addBossFlag) {
        enterNewPerson();
    }

    // If everything is ok, edit flag is "true" and addBoss flag is "false", save changes
    if (nameOk && surnameOk && jobOK && edit && !addBossFlag) {
        editPerson();
    }

    // If everything is ok, edit flag "false" and addBoss flag "true", add new Boss
    if (nameOk && surnameOk && jobOK && !edit && addBossFlag) {
        addBoss();
    }
}

// Clean error messages
function cleanErrorMessages() {
    var nameError = document.getElementById("js-nameError").innerHTML = "";
    var surnameError = document.getElementById("js-surnameError").innerHTML = "";
    var jobError = document.getElementById("js-jobError").innerHTML = "";
}

// Upper case first character;
function toUpperCase(str) {
    var temp = str.slice(1);
    var temp2 = str.charAt(0).toUpperCase();
    return temp2 + temp;
}