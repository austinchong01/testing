// import "./styles.css";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(one, two) {
    return one + two;
  },
  sub(one, two) {
    return one - two;
  },
  div(one, two) {
    return one / two;
  },
  mult(one, two) {
    return one * two;
  },
};

function caesarCipher(string, key) {
  /*
    ASCII Values

    Lower Case: 97(a) - 122(z)
    Upper Case: 65(A) - 90(Z)
    */

  const res = [];
  for (let i = 0; i < string.length; i += 1) {
    const asciiCode = string.charCodeAt(i);
    if (
      !(
        (asciiCode >= 97 && asciiCode <= 122) ||
        (asciiCode >= 65 && asciiCode <= 90)
      )
    ) {
      res.push(String.fromCharCode(asciiCode));
      continue;
    }

    let offset = asciiCode + key;
    if (
      (offset > 122 && asciiCode >= 97 && asciiCode <= 122) ||
      (offset > 90 && asciiCode >= 65 && asciiCode <= 90)
    )
      offset -= 26;
    res.push(String.fromCharCode(offset));
  }
  return res.join("");
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
