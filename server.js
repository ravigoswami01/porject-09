import dotenv from 'dotenv';
import app from './app.js';
import connectDatabase from '../src/config/Dbconnection.js'; 

dotenv.config({ path: './src/config/config.env' });

connectDatabase();
const PORT = process.env.PORT ;
app.listen(PORT, () =>
    console.log(`Server  mode on http://localhost:${PORT}`)
);
