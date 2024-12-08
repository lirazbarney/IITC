// this function checks if a given string is made only by numerical characters.
export default function isNumber(str) {
    const DIGITS = "1234567890";
    for (let i = 0; i < str.length; i++) {
      if (!DIGITS.includes(str[i])) {
        return false;
      }
    }
    return true;
  }