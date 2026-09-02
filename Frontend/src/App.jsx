import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    ;(async() => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(
          "/api/products"
        );
  
        setProducts(response.data);   
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  },[]);

  if (error) {
    return <h1>Something went wrong</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Number of products are: {products.length}</h1>
    </>
  )
}

export default App
