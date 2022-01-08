var pw = require('../possible-words.js');
var assert = require('assert');

describe("convertNumberToWords", () => {
  it("correctly converts one digit", () => {
    const result = pw.convertNumberToWords(["2"]);
    const expected = ["a", "b", "c"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts two digits that are the same", () => {
    const result = pw.convertNumberToWords(["2", "2"]);
    const expected = ["aa", "ba", "ca", "ab", "bb", "cb", "ac", "bc", "cc"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts two digits that are different", () => {
    const result = pw.convertNumberToWords(["2", "3"]);
    const expected = ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts three digits", () => {
    const result = pw.convertNumberToWords(["2", "2", "8"]);
    const expected = [
      "aat",
      "bat",
      "cat",
      "abt",
      "bbt",
      "cbt",
      "act",
      "bct",
      "cct",
      "aau",
      "bau",
      "cau",
      "abu",
      "bbu",
      "cbu",
      "acu",
      "bcu",
      "ccu",
      "aav",
      "bav",
      "cav",
      "abv",
      "bbv",
      "cbv",
      "acv",
      "bcv",
      "ccv"
    ];
    assert.equal(result.length, 27);
    assert.deepEqual(result, expected);
  })

  it("correctly converts multiple digits", () => {
    const result = pw.convertNumberToWords(["4", "3", "5", "5", "6"]);
    const expected = ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"];
    assert.equal(result.length, 243)
  })
})

describe("getSuggestions", () => {
  it("correctly converts one digit", () => {
    const result = pw.getSuggestions("2");
    const expected = ["a", "b", "c"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts two digits that are the same", () => {
    const result = pw.getSuggestions("22");
    const expected = ["aa", "ba", "ca", "ab", "bb", "cb", "ac", "bc", "cc"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts two digits that are different", () => {
    const result = pw.getSuggestions("23");
    const expected = ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"];
    assert.deepEqual(result, expected);
  })

  it("correctly converts three digits", () => {
    const result = pw.getSuggestions("228");
    const expected = [
      "aat",
      "bat",
      "cat",
      "abt",
      "bbt",
      "cbt",
      "act",
      "bct",
      "cct",
      "aau",
      "bau",
      "cau",
      "abu",
      "bbu",
      "cbu",
      "acu",
      "bcu",
      "ccu",
      "aav",
      "bav",
      "cav",
      "abv",
      "bbv",
      "cbv",
      "acv",
      "bcv",
      "ccv"
    ];
    assert.equal(result.length, 27);
    assert.deepEqual(result, expected);
  })

  it("correctly converts multiple digits", () => {
    const result = pw.getSuggestions("43556");
    const expected = ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"];
    assert.equal(result.length, 243)
  })
})