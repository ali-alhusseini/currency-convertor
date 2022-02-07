/*
/ Author: Ali Alhusseini (A00431699)
/
/ This file adds functionality to the HTML file. 
*/

const BITCOIN_FACTOR = 46515.16;

function display(toBeShown, toBeHid) {
    document.getElementById(toBeShown).style.display = "";
    document.getElementById(toBeHid).style.display = "none";
}


function convert(value) {
    if (value < 0) {
        alert("The amount must be positive.");
        location.reload();
    } else if (document.getElementById('bitcoinButton').clicked == true){
        convertToBitcoin(document.getElementById('amount').value);
    }
}

function convertToDollar(bitcoinValue) {

}

function convertToBitcoin(dollarValue) {
   console.log(dollarValue * BITCOIN_FACTOR);
}