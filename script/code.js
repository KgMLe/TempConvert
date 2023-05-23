function convertToC() {
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusInput = document.getElementById("celsius");
  let fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
  } else {
    celsiusInput.value = "";
  }
}

function convertToF() {
  let celsiusInput = document.getElementById("celsius");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusValue = parseFloat(celsiusInput.value);

  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    fahrenheitInput.value = "";
  }
}
