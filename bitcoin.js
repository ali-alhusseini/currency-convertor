/*
// Author: Ali Alhusseini (A00431699)
//
// This file calculates the conversions between Canadian Dollars and Bitcoins.
*/

const BITCOIN_FACTOR = 46515.16;

/*
// This function displays and hides the bitcoin and dollar signs next to the input
// box according to the button bressed.
//
// toBeShown: the sign to be shown.
// toBeHid: the sign to be hidden.
*/
function display(toBeShown, toBeHid) {
  document.getElementById(toBeShown).style.display = "";
  document.getElementById(toBeHid).style.display = "none";
}

/*
// This function checks the value inputed into the input box and displays a warning
// message for negative value or calls the corresponding function to calculate the 
// conversion.
//
// value: the value to be converted into bitcoins or dollars.
*/
function convert(value) {
  if (value < 0) {
    alert("The amount must be positive.");
    location.reload();
  } else if (btnradio1.checked) {
    convertToDollar(value);
  } else {
    convertToBitcoin(value);
  }
}

/*
// This function converts a Bitcoin value into Canadian Dollars and constructs a string 
// that is sent to the HTML file using innerHTML.
//
// value: Bitcoin value to be converted into Canadaian Dollars.
*/
function convertToDollar(value) {
  var output = '<i class="bi bi-currency-bitcoin"></i>';
  output += value;
  output += " = ";
  output += '<i class="bi bi-currency-dollar"></i>';
  output += (value * BITCOIN_FACTOR).toFixed(2);

  outputLine.innerHTML = output;
}

/*
// This function converts a Dollar value into Bitcoins and constructs a string 
// that is sent to the HTML file using innerHTML.
//
// value: Dollar value to be converted into Bitcoins.
*/
function convertToBitcoin(value) {
  var output = '<i class="bi bi-currency-dollar"></i>';
  output += value;
  output += " = ";
  output += '<i class="bi bi-currency-bitcoin"></i>';
  output += (value / BITCOIN_FACTOR).toFixed(2);

  outputLine.innerHTML = output;
}
