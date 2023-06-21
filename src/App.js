import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404';
import Inicio from './components/Inicio';
import Locales from './components/Locales';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';







function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou/>} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
