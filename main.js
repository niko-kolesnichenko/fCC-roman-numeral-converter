/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/

// Final solution

function convertToRoman(num) {
    let arabic_split = [];
    const lookup=[
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];

    for (let i = 0; i < 3; i++) {
        arabic_split.unshift(num % 10);
        num = Math.floor(num / 10);
    }

    arabic_split.unshift(num);
    
    return "M".repeat(arabic_split[0]) + lookup[2][arabic_split[1]] + lookup[1][arabic_split[2]] + lookup[0][arabic_split[3]];
   }
   
   console.log(convertToRoman(5999));


// Thinking history

const arabic_numeral = 453999;

/*
last digit corresponds to units.
second last digits corresponds to tens.
third last digit corresponds to hundreds.
from fourth last digit onwards everything corresponds to thousands
(because glory of Rome is forever, and won't end at 3999!).

I don't want to stop at 3999 and use simple "split in 4 categories ez gg" method,
therefore maybe use math with division with remainder, get 3 last digits and 
then convert all that's left into thousands?
*/

// getting last digit for converting to "units" category, and getting the number w/o
// last digit
function getLastDigit (num) {
    let arabic_numeral_units = num % 10;
    let arabic_numeral_wo_units = Math.floor(num / 10);
    return [arabic_numeral_units, arabic_numeral_wo_units];
}
// writing a loop to get array of three last digits (for units, tens, hundreds) and then
// the rest of a number (for thousands)
function getUnitsTensHundredsThousandsAsArray(num) {
    let arabic_split = [];

    for (let i = 0; i < 3; i++) {
        arabic_split.unshift(num % 10);
        num = Math.floor(num / 10);
    }

    arabic_split.unshift(num);
    return arabic_split;
}

// P.S.: "Let's do THE ARABIC SPLIT!!"

console.log(getLastDigit(arabic_numeral));
console.log(getUnitsTensHundredsThousandsAsArray(arabic_numeral));