import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ExpenseProvider} from "./context/ExpenseContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>
)
