// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Shift the character code by 13 positions
      var newCharCode = ((charCode - 65 + 13) % 26) + 65;

      // Add the decoded character to the array
      decoded.push(String.fromCharCode(newCharCode));
    } else if (charCode >= 97 && charCode <= 122) {
      // Check if the character is a lowercase letter
      // Shift the character code by 13 positions
      var newCharCode = ((charCode - 97 + 13) % 26) + 97;

      // Add the decoded character to the array
      decoded.push(String.fromCharCode(newCharCode));
    } else {
      // If the character is not a letter, add it to the array as-is
      decoded.push(str.charAt(i));
    }
  }

  // Join the array of decoded characters into a string and return it
  return decoded.join("");
}






// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
