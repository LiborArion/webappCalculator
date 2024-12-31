// WebappCalculator ... https://github.com/LiborArion/webappCalculator/new/main
// MIT License
// Libor Ballaty

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function convertUnit() {
  var input = document.getElementById("unitInput").value;
  var type = document.getElementById("unitType").value;
  var result;
  
  if (type === "metersToFeet") {
    result = input * 3.28084;
  } else if (type === "feetToMeters") {
    result = input / 3.28084;
  }
  
  document.getElementById("conversionResult").innerText = "Result: " + result;
}
