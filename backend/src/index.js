import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import vlogRoutes from './routes/vlogRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/vlogs', vlogRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

// Start server immediately for testing
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB separately
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
