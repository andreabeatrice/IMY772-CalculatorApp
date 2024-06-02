/**
 * @jest-environment jsdom
 */

import $ from "jquery";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
