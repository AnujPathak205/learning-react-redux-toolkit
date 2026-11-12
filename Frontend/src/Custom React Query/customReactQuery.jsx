import axios from "axios";
import { useEffect, useState } from "react";

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

export default customReactQuery