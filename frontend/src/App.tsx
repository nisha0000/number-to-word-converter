import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { configureStore } from './features/store';
import { StandardPage } from './features/page';

const { store } = configureStore();

const App: React.FC = () => {
  return (
    // <Provider store={store}>
      <StandardPage />
    // </Provider>
  );
}

export default App;
