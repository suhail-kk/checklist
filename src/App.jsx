import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoute from './routes/AppRoute'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" aria-label={undefined} />
        <AppRoute />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
