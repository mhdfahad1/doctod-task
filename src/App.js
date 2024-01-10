import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Home/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
