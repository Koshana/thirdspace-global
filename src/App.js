import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { Navigate } from 'react-router-dom'

function App() {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Navigate to={'/home'}/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/auth' element={!user? <Auth/> : <Navigate to={'/'}/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
