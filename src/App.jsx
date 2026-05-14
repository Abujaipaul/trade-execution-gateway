import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import AccountProvider from './accountcontext'
import Portfolio from './portfolio'
import Otp from './otp'



function App() {
  

  return (
    <>
    <AccountProvider>
       <BrowserRouter>

       <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/otp' element={<Otp/>} />
       </Routes> 
       </BrowserRouter>
       
     </AccountProvider>
    </>
  )
}

export default App
