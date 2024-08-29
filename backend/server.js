const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Init Middleware
app.use(express.json());

app.use(errorHandler);

app.use(cors());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/users',authRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => 
    console.log(`Server started on port successfully ${PORT}`));
