import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthenticationContext/auth.context'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Contact from './component/Contact'
import Home from './component/Home'
import Pricing from './component/Pricing'
// import PrivateRoute from './routing/PrivateRoute'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './pages/PageNotFound'
import UserProfile from './component/UserProfile'
import Feedback from './component/Feedback'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} >
              <Route path='login' element={<LoginPage />} />
              <Route path='signup' element={<SignupPage />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard/>} >
              <Route index path='home' element={<Home />} />
              <Route index path='contact' element={<Contact />} />
              <Route index path='pricing' element={<Pricing />} />
              <Route index path='userprofile' element={<UserProfile />} />
              <Route index path='feedback' element={<Feedback />} />
              
            </Route>
            
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  )
}

export default App;
