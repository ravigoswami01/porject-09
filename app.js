import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRouting.js';
import productRoutes from './routes/PorductRouting.js';
import orderRoutes from './routes/orderRouting.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('This is your route!');
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
