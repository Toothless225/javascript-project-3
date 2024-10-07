function validate(e) {
    e.preventDefault()
    const name1 =
        document.getElementById("name").value
    alert(name1)
    var text = document.getElementById("big").innerHTML
    alert(text)
}
function add() {
    var a = 20;
    var b = 12;
    document.getElementById("ans").innerHTML = a + b;
}