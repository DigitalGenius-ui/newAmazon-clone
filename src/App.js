import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/addedProducts/Cart';
import Header from './components/header/Header';
import Layer from './components/Layer/Layer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Layer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
