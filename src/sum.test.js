const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index");

test("capitalize", () => {
  expect(capitalize("aweston")).toBe("Aweston");
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("test")).not.toBe("test");
  expect(capitalize("ANY")).toBeDefined();
});

test("reverse string", () => {
  expect(reverseString("aweston")).toBe("notsewa");
  expect(reverseString("test")).toBe("tset");
  expect(reverseString("test")).not.toBe("test");
  expect(reverseString("ANY")).toBeDefined();
});

test("calculator", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.sub(9, 2)).toBe(7);
  expect(calculator.div(33, 11)).toBe(3);
  expect(calculator.mult(3, 8)).toBe(24);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("aweston", 4)).toBe("eaiwxsr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
