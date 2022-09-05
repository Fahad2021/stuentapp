import './App.css';
import AddUsers from './Components/AddUsers';
import AllUser from './Components/AllUser';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navabar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUser from './Components/EditUser';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='add' element={<AddUsers/>}/>
    <Route path='all' element={<AllUser/>}/>
    <Route path='/edit/:id' element={<EditUser/>} />
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
