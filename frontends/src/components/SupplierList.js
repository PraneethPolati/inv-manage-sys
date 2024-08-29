import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SupplierList = () => {
  const suppliers = [
    { name: 'Supplier 1', contact: 'contact1@example.com', products: ['Product 1', 'Product 2'] },
    { name: 'Supplier 2', contact: 'contact2@example.com', products: ['Product 3'] },
    // Add more suppliers as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Supplier Name</TableCell>
            <TableCell>Contact Information</TableCell>
            <TableCell>Products Supplied</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliers.map((supplier, index) => (
            <TableRow key={index}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.contact}</TableCell>
              <TableCell>{supplier.products.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SupplierList;
