import React from "react"
import ReactDOM from 'react-dom/client'
import App from './08-antd-mobile/App'
import { Provider } from "react-redux"
import { store, persistor } from './09-immutable/01-base'
import { PersistGate } from "redux-persist/integration/react"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);