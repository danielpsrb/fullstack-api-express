import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/dashboard' element={<Navbar><Dashboard /></Navbar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
