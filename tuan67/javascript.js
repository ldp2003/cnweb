function display(value) {
    document.getElementById("result").value += value;
}

function calc() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function undo() {
    let res = document.getElementById("result").value
    document.getElementById("result").value = res.substring(0, res.length - 1);
}