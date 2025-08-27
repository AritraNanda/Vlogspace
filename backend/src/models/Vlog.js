import mongoose from 'mongoose';

const vlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  feature: { type: String, required: true }, // This will serve as the blog content
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Vlog', vlogSchema);
