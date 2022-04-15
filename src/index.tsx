import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./component/errorBoundry/errorBoundary";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App/>
            </Router>
        </ErrorBoundary>
    </Provider>,
);
