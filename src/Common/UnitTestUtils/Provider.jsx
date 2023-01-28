import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import bookSlice from "../../Store/BookSlice";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    initialState = {},
    store = configureStore({
      reducer: { books: bookSlice.reducer },
      initialState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {

    const mockedUsedNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
       ...(jest.requireActual("react-router-dom")),
       useNavigate: () => mockedUsedNavigate
     }));

    return (
      <Provider store={store}>
         <BrowserRouter>
         { children }
        </BrowserRouter> 
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}