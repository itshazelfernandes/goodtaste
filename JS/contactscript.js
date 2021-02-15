// JavaScript source code
function showMessage() {
    var ms1 = document.getElementById("name_input").value;
    var ms2 = document.getElementById("age_input").value;
    var ms3 = document.getElementById("email").value;
    var ms4 = document.getElementById("male").value;
    var ms5 = document.getElementById("female").value;
    var ms6 = document.getElementById("indian").value;
    var ms7 = document.getElementById("query").value;
    display_message.innerHTML = "Details : " + ms1 + " " + ms2 + " " + ms3 + " " + ms4 + " "
                                             + ms5 + " " + ms6 + " " + ms7 + " ";
}