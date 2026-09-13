import express from 'express';
import { products } from './products.js';

const app = express();

const port = 3000;

app.get("/api/products", (req,res) => {
    if(req.query.search) {
        const filterProduct = products.filter(product => 
            product.name.toLowerCase().includes(req.query.search)
        );
        res.send(filterProduct);
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