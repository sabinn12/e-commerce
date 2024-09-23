import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart'; // Assuming you have a Cart component
import LoginSignup from './pages/loginsignup'; // Assuming you have a LoginSignup component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Men' element={<ShopCategory category='Men' />} />
          <Route path='/Women' element={<ShopCategory category='Women' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          
          {/* Product Route with Dynamic Product ID */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Cart and Login Routes should be outside the /product route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
