function calculateFactorial() {
    let numberInput = parseInt(document.getElementById("numberInput").value);
    let result = 1;
    for (let i = 2; i <= numberInput; i++) {
      result *= i;
    }
    document.getElementById("result").innerText = "El factorial de " + numberInput + " es: " + result;
  }
  
  
  
  