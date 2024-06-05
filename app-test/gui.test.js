/**
 * @jest-environment jsdom
 */
import request from "supertest";
import { app } from "../src/app.mjs";
import { parse } from "node-html-parser";
const Calculator = require("../src/calculator.mjs").Calculator;
var server, root;

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

beforeAll(async () => {
  server = await request(app).get("/");
  root = parse(server.text);
  return;
});

afterAll(() => {
  app.close();
});
