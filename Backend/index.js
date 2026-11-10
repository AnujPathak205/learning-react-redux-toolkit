import express from 'express';
import { products } from './products.js';

const app = express();

const port = 3000;

let i = 0;

app.get("/api/products", (req,res) => {
    console.log(++i);

    if(req.query.search) {
        const filterProduct = products.filter(product => 
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
        
        setTimeout(() => {
            res.send(filterProduct);
        },3000);


        return;
    }

    // To experience delay
    setTimeout(() => {
        res.send(products);
    },3000);

    
})

app.listen(port,() => {
    console.log(`Server is running on port ${port} `);
})