import logo from './logo.svg';
import './App.css';
import SignUp from './screens/SignUp';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Wheather from './screens/Wheather';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/signup' element = {<SignUp />} />
        <Route exact path='/' element = {<Login />} />
        <Route exact path='/wheather' element = {<Wheather />} />
        
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
