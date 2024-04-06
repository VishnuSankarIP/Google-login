import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import LoginPage from './Pages/LoginPage'

function App() {
 

  return (
    <>
    
     <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route>
     </Routes>
    </>
  )
}

export default App
