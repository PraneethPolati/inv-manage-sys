import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [stockLevel, setStockLevel] = useState('');
  const [reorderLevel, setReorderLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      sku,
      price: parseFloat(price),
      stockLevel: parseInt(stockLevel, 10),
      reorderLevel: parseInt(reorderLevel, 10),
    };
    onSubmit(newProduct);
    setName('');
    setSku('');
    setPrice('');
    setStockLevel('');
    setReorderLevel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container container spacing={2}>
        <Container item xs={12}>
          <TextField
            label="Product Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Container>
        <Container item xs={12}>
          <TextField
            label="SKU"
            fullWidth
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </Container>
        <Container item xs={12}>
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </Container>
        <Container item xs={12}>
          <TextField
            label="Stock Level"
            fullWidth
            value={stockLevel}
            onChange={(e) => setStockLevel(e.target.value)}
            type="number"
          />
        </Container>
        <Container item xs={12}>
          <TextField
            label="Reorder Level"
            fullWidth
            value={reorderLevel}
            onChange={(e) => setReorderLevel(e.target.value)}
            type="number"
          />
        </Container>
        <Container item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save Product
          </Button>
        </Container>
      </Container>
    </form>
  );
};

export default ProductForm;
