import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
//components
import App from './App'
//styles
import './style/index.scss'
import 'react-toastify/dist/ReactToastify.css';
//redux
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
