import React from "react"
import ReactDOM from 'react-dom/client'
import App from './10-mobx/new-mobx/App'
import { Provider } from "mobx-react"
import store from "./10-mobx/new-mobx/mbox/store"



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);