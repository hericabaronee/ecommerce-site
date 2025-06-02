import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CheckoutPage from './pages/CheckoutPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider, { CartContext } from './contexts/CartContext';

const AppContent = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  // Define se o Footer deve aparecer ou não
  const hideFooter =
    location.pathname === '/checkout' && cart.length === 0;

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      <Sidebar />
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;