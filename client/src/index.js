import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import { BrowserRouter } from 'react-router-dom';
// for Chrome Redux Devtools Extension
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App/App";

//const store = createStore(reducers, composeWithDevTools);
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
