import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import ProductPage from '@/pages/ProductPage';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="page"> 
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

