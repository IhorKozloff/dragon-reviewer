import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

import { eyeshieldStore, persistor } from './redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter basename='dragon-reviewer'>
    <Provider store={eyeshieldStore}>
        <PersistGate loading={null} persistor={persistor}>

            <GlobalStyle/>
        
            <App />
        
        </PersistGate>
    </Provider>
    </BrowserRouter>
    </React.StrictMode>
);

