function appendToDisplay(value) {
    document.getElementById("display").value += value;

}
function clearToDisplay() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

 function calculateResult() {
        try {
            document.getElementById("display").value = eval(document.getElementById("display").value);
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }