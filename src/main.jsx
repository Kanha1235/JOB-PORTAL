import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import UserContextProvider from './context/UserContextProvider.jsx'
import {BrowserRouter} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
   
  <UserContextProvider>
    <Provider store = {store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </UserContextProvider>
)
