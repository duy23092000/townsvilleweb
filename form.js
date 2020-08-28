function checkForm() {
    var d = document.getElementById('mainForm'); // just a shortcut
    var errors = false;
    var errorMsg = "";
// basic check required fields
    if (d.name.value == "") {
        errorMsg += "Please enter your name.\n";
        errors = true;
    }
    // check if one of the radio buttons for site rating is selected
    var checkedSiteRating = false;
    for (var i = 0; i < 3; i++) {
        if (d.siterating[i].checked)
            checkedSiteRating = true;
    }
    if (!checkedSiteRating) {
        errorMsg += "Please select a site rating.\n";
        errors = true;
    }
    // if errors exist, popup error message
    if (errors)
        alert(errorMsg);
    // return true (submit form) or false (don't submit form) depending on errors
    return !errors;
}

function setColourBasedOnLength(name, minValue) {
    var f = document.getElementById(name);
    if (f.value.length >= minValue)
        f.style.color = "#0C0";
    else
        f.style.color = "#C00";
	
    f.size = f.value.length + 1;
    f.style.width = "auto";
}
function changeStyle(element) {
	element.style.color = "#FF0000"
}

function changeColor(element,color) {
	element.style.color = color
}

function displayName(form) {
		alert ('Hello' + form.lastname.value + 'You have successfully registered')
	}