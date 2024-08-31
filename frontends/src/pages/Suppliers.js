import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Suppliers = () => {
  const [supplierDetails, setSupplierDetails] = useState({
    supplierName: '',
    contactInfo: '',
    productsSupplied: ''
  });
  const [suppliers, setSuppliers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails({ ...supplierDetails, [name]: value });
  };

  const handleAddSupplier = () => {
    setSuppliers([...suppliers, supplierDetails]);
    setSupplierDetails({
      supplierName: '',
      contactInfo: '',
      productsSupplied: ''
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Supplier Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Add New Supplier
            </Typography>
            <TextField
              label="Supplier Name"
              name="supplierName"
              value={supplierDetails.supplierName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact Information"
              name="contactInfo"
              value={supplierDetails.contactInfo}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Products Supplied"
              name="productsSupplied"
              value={supplierDetails.productsSupplied}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddSupplier}
              style={{ marginTop: '16px' }}
            >
              Add Supplier
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Supplier List
            </Typography>
            <List>
              {suppliers.map((supplier, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={supplier.supplierName}
                    secondary={`Contact: ${supplier.contactInfo}, Products: ${supplier.productsSupplied}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Suppliers;
