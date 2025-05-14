import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Form } from 'react-router-dom'
import ShowPages from './ShowPages.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <ShowPages />
    <Toaster
      position="top-right"
      reverseOrder={true}
    />

  </BrowserRouter>

)
