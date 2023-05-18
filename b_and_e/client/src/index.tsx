import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
=======
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store } from './redux/store';
>>>>>>> cf663b191b6107e7957a9b9430d9b9e82eee52d6

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
>>>>>>> cf663b191b6107e7957a9b9430d9b9e82eee52d6
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
