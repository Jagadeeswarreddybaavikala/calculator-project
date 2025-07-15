function append(val) {
    document.getElementById("display").value += val;
  }
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function square() {
    let current = document.getElementById("display").value;
    if (current) {
      document.getElementById("display").value = eval(current) ** 2;
    }
  }
function calculate() {
    let exp = document.getElementById("display").value;
    try {
      document.getElementById("display").value = eval(exp);
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  
  