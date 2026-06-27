
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import LoginSignup from './Pages/LoginSignup'
import Checkout from './Pages/Checkout';
import Footer from './Components/Footer/Footer';
import MyOrders from './Pages/MyOrders';
import OrderSuccess from './Pages/OrderSuccess';
import abaya_banner from './Components/Assets/abaya_banner.jpg'
import scarf_banner from './Components/Assets/scarf_banner.jpg'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log("AdminDashboard:", AdminDashboard);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route
          path='/admin'
          element={<h1>ADMIN WORKING</h1>}
        />
        <Route path = '/' element = {<Shop category="shop"/>}/>
        <Route path = '/abaya' element = {<ShopCategory banner = {abaya_banner}category = "abaya"/>}/>
        <Route path = '/scarf' element = {<ShopCategory banner = {scarf_banner} category = "scarf"/>}/>
        <Route path = '/product' element = {<Product/>}>
          <Route path = ':productId' element={<Product/>}/>
        </Route>

        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
        <Route path = '/wishlist' element = {<Wishlist/>}/>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-success' element={<OrderSuccess />} />
        <Route path='/orders' element={<MyOrders />} />
      </Routes>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastStyle={{
          background: "#ffffff",
          color: "#111111",
          border: "1px solid #C9A227",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          fontFamily: "inherit"
        }}
      />
      </BrowserRouter>
    </div>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>HOME PAGE</h1>} />
//         <Route path="/admin" element={<h1>ADMIN WORKING</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
