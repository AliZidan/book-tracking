import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SearchHOC from "./SearchHOC";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<SearchHOC />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     render(<SearchHOC name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     render(<SearchHOC name="Margaret" />, container);
//   });
  expect(container.textContent).toBe("Hello, Margaret!");
});