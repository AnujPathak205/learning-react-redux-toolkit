import { useState } from 'react'

import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [search,setSearch] = useState("");
  const {products,loading,error} = customReactQuery(`/api/products`,search);

  

  return (
    <div style={{backgroundColor:loading?"red":"white"}}>
      <h1>Hello from Anuj Pathak</h1>
      {error && (<h1>Something went wrong</h1>)}
      
      {loading && (<h1>Loading...</h1>)}
      <h1>Number of products are: {products.length}</h1>

      {products.map((p,i) => 
        <p key={i}>{p.name}</p>
      )}

      <input type="text"
             value={search}
             onChange={e => setSearch(e.target.value)}
       />
    </div>
  )
}

export default App

const customReactQuery = (urlPath,search) => {
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    ;(async() => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(urlPath, {
            params: {
                search: search
            },

            signal: controller.signal
        });        
  
        setProducts(response.data);   
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled: ',error.message);
          return;
        }

        setError(true);
        console.log(error.response.status);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    }
  },[urlPath,search]);

  return {products,loading,error};
}