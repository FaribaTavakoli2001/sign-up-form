import './App.css';
import SignUP from './components/SignUP';
import Login from './components/Login';
import { Routes , Route , Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/' element={<Navigate to='/signup'/>} />
      </Routes>
        

    </div>
  );
}

export default App;
