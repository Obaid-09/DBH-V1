
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import abaya_banner from './Components/Assets/abaya_banner.jpg'
import scarf_banner from './Components/Assets/scarf_banner.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop category="shop"/>}/>
        <Route path = '/abaya' element = {<ShopCategory banner = {abaya_banner}category = "abaya"/>}/>
        <Route path = '/scarf' element = {<ShopCategory banner = {scarf_banner} category = "scarf"/>}/>
        <Route path = '/product' element = {<Product/>}>
          <Route path = ':productId' element={<Product/>}/>
        </Route>

        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
