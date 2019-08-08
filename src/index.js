import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RouterExample from './component';
import configureStore from './redux';
const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterExample />
    </PersistGate>
  </Provider>
)

ReactDom.render(<App />, document.getElementById('root'));