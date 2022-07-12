import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './router'
import './fonts/Nunito/Nunito-VariableFont_wght.ttf'
import store from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'

const persist = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
