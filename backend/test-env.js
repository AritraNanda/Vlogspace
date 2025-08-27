import dotenv from 'dotenv';
dotenv.config();

console.log('Environment variables loaded:');
console.log('ADMIN_USERNAME:', JSON.stringify(process.env.ADMIN_USERNAME));
console.log('ADMIN_PASSWORD:', JSON.stringify(process.env.ADMIN_PASSWORD));
console.log('JWT_SECRET:', JSON.stringify(process.env.JWT_SECRET));

// Test the comparison
const testUsername = 'aritra';
const testPassword = '629415';

console.log('\nTesting comparison:');
console.log('Username match:', testUsername === process.env.ADMIN_USERNAME);
console.log('Password match:', testPassword === process.env.ADMIN_PASSWORD);
console.log('Username length:', process.env.ADMIN_USERNAME?.length);
console.log('Password length:', process.env.ADMIN_PASSWORD?.length);
