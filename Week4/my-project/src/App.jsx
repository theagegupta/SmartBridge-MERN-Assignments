import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import AddUserForm from './pages/AddUserForm';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("from app.jsx",products)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage products={products} />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path='/addUser' element={<AddUserForm></AddUserForm>}></Route>
    </Routes>
  </Router>
  );
}

export default App
