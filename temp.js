// getting id of selectbox and adding event
var events = document.getElementById("convert");
events.addEventListener("change", funcCall);
// on load of page initialize values
function myFunction() {
    var cel = " ";
    var far = " ";
    document.querySelector("#msg").innerHTML = "please enter the temp";

}
// initialize condition according to selected value
function funcCall() {
    if (events.value == '1') {
        celToFar();
    } else if (events.value == '2') {
        farToCel();
    }
}
// convert cel to far
function celToFar() {
    var cel = document.getElementById('inp').value;
    document.querySelector("#msg").innerHTML = "enter temp in f";

    if (cel != 0) {
        var far = (cel * (9 / 5)) + 32;
        document.getElementById('inp').value =far.toFixed(2);

    }
    else if (cel === '0') {
        document.getElementById('inp').value = 32;

    }
}
// convert far to cel
function farToCel() {
    document.querySelector("#msg").innerHTML = "enter temp in c";

    var far = document.getElementById('inp').value;
    if (far != 0) {
        var cel = (far - 32) * (5 / 9);
        document.getElementById('inp').value = cel.toFixed(2);

    }
    if (far === '0') {
        document.getElementById('inp').value = -17.77;

    }

}

