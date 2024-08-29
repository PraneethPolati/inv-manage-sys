import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper } from '@mui/material';

const ProductForm = ({ onSubmit = () =>{} }) => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [stockLevel, setStockLevel] = useState('');
  const [reorderLevel, setReorderLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      const newProduct = {
        name,
        sku,
        price: parseFloat(price),
        stockLevel: parseInt(stockLevel, 10),
        reorderLevel: parseInt(reorderLevel, 10),
      };
      onSubmit(newProduct);
      // Reset form fields
      setName('');
      setSku('');
      setPrice('');
      setStockLevel('');
      setReorderLevel('');
    } else {
      console.error('onSubmit is not a function');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="SKU"
                fullWidth
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Stock Level"
                fullWidth
                value={stockLevel}
                onChange={(e) => setStockLevel(e.target.value)}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Reorder Level"
                fullWidth
                value={reorderLevel}
                onChange={(e) => setReorderLevel(e.target.value)}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Save Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ProductForm;
