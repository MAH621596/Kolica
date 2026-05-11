import './index.css'
import App from './App.tsx'
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
)
