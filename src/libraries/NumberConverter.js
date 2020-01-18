class NumberConverter {
  ROMAN_MAP = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  /**
   * Function created to convert Decimal values to Roman
   * @param {Number} decimal
   * @returns String
   */
  convertDecimalToRoman(decimal) {
    if (decimal === 0) {
      return "";
    }

    for (var index = 0; index < this.ROMAN_MAP.length; index++) {
      if (decimal >= this.ROMAN_MAP[index][0]) {
        return (
          this.ROMAN_MAP[index][1] +
          this.convertDecimalToRoman(decimal - this.ROMAN_MAP[index][0])
        ); //created a recursive call for the convert
      }
    }
  }
}
export default NumberConverter;
