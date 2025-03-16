function convertToRoman(num) {
  	const romanSymbols = [
    ['M', 1000], 
    ['CM', 900],
    ['D', 500], 
    ['CD', 400],
    ['C', 100], 
    ['XC', 90],
    ['L', 50], 
    ['XL', 40],
    ['X', 10], 
    ['IX', 9],
    ['V', 5], 
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  // Loop through each symbol-value pair
  for (let i = 0; i < romanSymbols.length; i++) {
    // While num is greater than or equal to the value of the current symbol
    while (num >= romanSymbols[i][1]) {
      result += romanSymbols[i][0]; // Append the corresponding Roman numeral
      num -= romanSymbols[i][1]; // Subtract the value from num
    }
  }

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
