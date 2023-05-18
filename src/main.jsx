import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { Provider } from 'react-redux';

import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChatContextProvider>
  </AuthContextProvider>
);
