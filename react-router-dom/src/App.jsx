import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ContatoPage from './pages/Contato'
import LoginPage from './pages/Login/Login'

function App() {


  return (
    <>
      <BrowserRouter>
          <Link to={"/"}>Home</Link>
          <Link to={"/contato"}>Contato</Link>
          <Link to={"/login"}>Login</Link>
          
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/contato' element={<ContatoPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
