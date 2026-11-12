import { useState } from 'react'
import { useEffect } from 'react'

import customReactQuery from '../Custom React Query/customReactQuery'

function ProductPage() {
  const [search,setSearch] = useState("")
  const {products,loading,error} = customReactQuery(`/api/products`,search)

  

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

export default ProductPage