/**
 *  @author Borowiak, Matthew (borowiakm1@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS 104 Project 01 || Created 09.25.2017
 *  @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let LotNumber, NumBedrooms, NumBathrooms, GarageSize, BasePrice, TotalPrice;

function main() {
    setLotNumber();
    setNumBedrooms();
    setNumBathrooms();
    setGarageSize();
    setBasePrice();
    setTotalPrice();
    printPrice();
}

main();
function setLotNumber() {
    LotNumber = Number(PROMPT.question(`\nPlease enter Lot Number:  `));
}
function setNumBedrooms() {
    NumBedrooms = Number(PROMPT.question(`\nPlease enter Number of Bedrooms:  `));
}
function setNumBathrooms() {
    NumBathrooms = Number(PROMPT.question(`\nPlease enter Number of Bathrooms:  `));
}
function setGarageSize() {
    GarageSize = Number(PROMPT.question(`\nPlease enter size of garage in number of cars to be stored:  `));
}
function setBasePrice() {
    BasePrice = 50000;
}
function setTotalPrice() {
    TotalPrice = (BasePrice + (NumBedrooms * 17000) + (NumBathrooms * 12500) + (GarageSize * 6000));
}
function printPrice() {
    process.stdout.write('\x1Bc');
    console.log("\nTotal price for lot " + LotNumber +" in the River Falls subdivision is:  $" + TotalPrice);
}