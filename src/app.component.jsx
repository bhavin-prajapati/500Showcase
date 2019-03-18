import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducers from "./reducers";
import ShowcasePage from "./components/ShowcasePage/ShowcasePage";

export default () => {
  const middlewares = [thunkMiddleware];

  /* istanbul ignore if */
  if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/showcase" />} />
          <Route path="/showcase" component={ShowcasePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
