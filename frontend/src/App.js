
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopcategory';
import Product from './pages/product';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/Men' element={<ShopCategory category='Men'/>} />
      <Route path='/Women' element={<ShopCategory category='Women'/>} />
      <Route path='/kids' element={<ShopCategory category='kids'/>} />
      <Route path="/product" element={<Product/>}>
      
      </Route>
     </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
