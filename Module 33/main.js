function validation() {
    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age").value;
    var valid_age_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    var isValid = true;

    // Name validation
    if (!name.match(valid_name_regex)) {
        document.getElementById("name_error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("name_error").style.visibility = "hidden";
    }

    // Age validation
    if (!age.match(valid_age_regex)) {
        document.getElementById("age_error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("age_error").style.visibility = "hidden";
    }

    // City validation
    if (city === "") {
        document.getElementById("city_error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("city_error").style.visibility = "hidden";
    }

    return isValid;
}
