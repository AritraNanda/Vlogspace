import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vlog from './src/models/Vlog.js';

dotenv.config();

const sampleVlogs = [
  {
    title: "My Journey to Digital Nomadism",
    author: "Sarah Chen",
    feature: "After years of working in a corporate office, I decided to take the leap into digital nomadism. This journey has been both challenging and incredibly rewarding. I've learned to work from cafes in Bali, co-working spaces in Lisbon, and even beach huts in Thailand. The freedom to explore new cultures while maintaining my career has opened my eyes to possibilities I never knew existed. In this vlog, I share the practical steps I took to transition, the tools I use to stay productive, and the mindset shifts that made it all possible. From dealing with time zones to finding reliable wifi, I cover all the essentials for anyone considering this lifestyle change."
  },
  {
    title: "Cooking Adventures: Mastering Italian Cuisine",
    author: "Marco Rossi",
    feature: "Growing up in my nonna's kitchen in Tuscany, I learned that cooking is more than just following recipes – it's about understanding ingredients, respecting traditions, and creating memories. In this culinary journey, I take you through the process of making authentic Italian dishes from scratch. We'll explore the secrets of perfect pasta dough, the art of making ragù that simmers for hours, and why using San Marzano tomatoes makes all the difference. Each dish tells a story of family traditions passed down through generations. Join me as I share not just recipes, but the passion and love that goes into every meal in Italian culture."
  },
  {
    title: "Urban Photography: Finding Beauty in Chaos",
    author: "Alex Thompson",
    feature: "The city never sleeps, and neither does its beauty. Through my lens, I've discovered that the most extraordinary moments happen in the most ordinary places. This vlog explores my approach to urban photography – from capturing the golden hour light reflecting off skyscrapers to finding intimate human moments in crowded subway stations. I share techniques for working with available light, dealing with fast-moving subjects, and most importantly, developing an eye for composition in cluttered urban environments. Photography has taught me to slow down and truly see the world around me, finding art in the everyday hustle and bustle of city life."
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing vlogs
    await Vlog.deleteMany({});
    console.log('Cleared existing vlogs');
    
    // Add sample vlogs
    await Vlog.insertMany(sampleVlogs);
    console.log('Added sample vlogs');
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
