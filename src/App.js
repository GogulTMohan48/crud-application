import './App.css';

import NavBar from './components/NavBar';
import Addusers from './components/Addusers';
import Allusers from './components/Allusers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
   <Routes>
      <Route path='/' element={<Addusers/>}/>
      <Route path='all'element= {<Allusers/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
