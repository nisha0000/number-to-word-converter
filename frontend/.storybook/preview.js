import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import React from "react";

const initialState = {};

// this is only used so feature flags do not break storybook
// features are not visible unless the name is added to initial state above
const withReduxStore = (story) => {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);
  
  return (
  <Provider store={store}>
    { story() }
  </Provider>
)}

export const decorators = [
  withReduxStore,
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
