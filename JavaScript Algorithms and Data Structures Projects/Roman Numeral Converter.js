function convertToRoman(num) {
  var romans = [
      ["I", "V"],
      ["X", "L"],
      ["C", "D"],
      ["M"]
    ],
    digits = num
      .toString()
      .split("")
      .reverse()
      .map(function(item, index) {
        return parseInt(item);
      }),
    numeral = "";
  for (var i = 0; i < digits.length; i++) {
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    if (romans[i][1]) {
      numeral = numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        .replace(
          romans[i][1] + romans[i][0].repeat(4),
          romans[i][0] + romans[i + 1][0]
        )
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }
  return numeral;
}
convertToRoman(36);