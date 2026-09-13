import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const {products,loading,error} = customReactQuery("/api/products");

  return (
    <>
      <h1>Hello from Anuj Pathak</h1>
      {error && (<h1>Something went wrong</h1>)}
      {loading && (<h1>Loading...</h1>)}
      <h1>Number of products are: {products.length}</h1>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    ;(async() => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(urlPath);
  
        setProducts(response.data);   
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  },[]);

  return {products,loading,error};
}