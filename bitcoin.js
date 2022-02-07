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
        convertToBitcoin(value);
    } else {
        convertToDollar(value);
    }
}

function convertToDollar(bitcoinValue) {
    let result = bitcoinValue * BITCOIN_FACTOR;
    localStorage.setItem("result", result);

}

function convertToBitcoin(dollarValue) {
    let result = dollarValue * BITCOIN_FACTOR;
    localStorage.setItem("result", result);
    document.write("converted to bitcoin");
}