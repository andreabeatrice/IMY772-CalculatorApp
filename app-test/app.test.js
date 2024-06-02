/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("Input #1", () => {
  test("Page has input #1", () => {
    return expect(
      Promise.resolve(document.getElementById("input1")),
    ).resolves.not.toBeNull();
  });

  test("Input #1 has a maxlength=3", () => {
    return expect(
      Promise.resolve(document.getElementById("input1").maxlength()),
    ).resolves.toBe("3");
  });

  test("Input #1 is required", () => {
    return expect(Promise.resolve(document.getElementById("input1").required()))
      .resolves.not()
      .toBeNull();
  });
});

describe("Input #2", () => {
  test("Page has input #2", () => {
    return expect(
      Promise.resolve(document.getElementById("input2")),
    ).resolves.not.toBeNull();
  });

  test("Input #2 has a maxlength=3", () => {
    return expect(
      Promise.resolve(document.getElementById("input2").maxlength()),
    ).resolves.toBe("3");
  });

  test("Input #2 is required", () => {
    return expect(Promise.resolve(document.getElementById("input2").required()))
      .resolves.not()
      .toBeNull();
  });
});

describe("Operations input", () => {
  describe("Operations input", () => {
    test("Input #2 is required", () => {});
  });
});
