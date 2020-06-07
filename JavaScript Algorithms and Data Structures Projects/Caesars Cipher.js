function rot13(str) {
 return str.split("").map(function(letter) {
   var charCode = letter.charCodeAt(0);
   if (charCode >= 65 && charCode <= 90) {
     charCode = (((charCode % 65) + 13 ) % 26 ) + 65;
   }
   return String.fromCharCode(charCode);
 }).join("");
}
rot13("SERR PBQR PNZC");