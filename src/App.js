import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
