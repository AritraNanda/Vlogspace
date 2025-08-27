# Vlog App Backend

## Features
- Admin login with JWT authentication
- Upload vlogs (title, author, feature)
- Organized with routes, controllers, models, and middleware

## Setup
1. Install dependencies:
   ```bash
   npm install express mongoose dotenv cors jsonwebtoken
   npm install --save-dev nodemon
   ```
2. Create a `.env` file (already scaffolded) and fill in your values.
3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/admin/login` — Admin login
- `GET /api/vlogs` — List all vlogs
- `POST /api/vlogs` — Create vlog (admin only)
