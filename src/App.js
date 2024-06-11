import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProd from './components/AddProd';
import ViewProd from './components/ViewProd';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProd/>} />
      <Route path='/viewProd' element={<ViewProd/>} />
      

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
