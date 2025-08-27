import Vlog from '../models/Vlog.js';

export const getVlogs = async (req, res) => {
  try {
    const vlogs = await Vlog.find().sort({ createdAt: -1 });
    res.json(vlogs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createVlog = async (req, res) => {
  const { title, author, feature } = req.body;
  if (!title || !author || !feature) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const vlog = new Vlog({ title, author, feature });
    await vlog.save();
    res.status(201).json(vlog);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
