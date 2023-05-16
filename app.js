

function displayResult(num) {
    document.getElementById('clr').value += num;
}
function clearBtn() {
    document.getElementById("clr").value = "";

}
function getResult() {
    document.getElementById('clr').value = eval(document.getElementById('clr').value);
}
function removeNum() {
    var res = document.getElementById("clr").value;
    res = document.getElementById("clr").value = res = document.getElementById("clr").value.slice(0, res.length - 1);
}


























