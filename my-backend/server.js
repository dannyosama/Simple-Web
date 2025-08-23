   const express = require('express');
   const bodyParser = require('body-parser');
   const cors = require('cors');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(cors()); // Enable CORS for all routes
   app.use(bodyParser.json()); // To parse JSON request bodies

   // Mock user data (replace with a database in a real application)
   const users = [
       { username: 'test', password: 'password123' },
       { username: 'admin', password: 'adminpassword' }
   ];

   app.post('/login', (req, res) => {
       const { username, password } = req.body;

       // Find user (in a real app, query database and compare hashed passwords)
       const userFound = users.find(u => u.username === username && u.password === password);

       if (userFound) {
           // In a real app, generate a JWT token here
           const token = 'mock_jwt_token_for_' + userFound.username;
           res.status(200).json({
               success: true,
               message: 'Login successful!',
               user: { id: userFound.username, username: userFound.username },
               token: token
           });
       } else {
           res.status(401).json({
               success: false,
               message: 'Invalid username or password.'
           });
       }
   });

   app.listen(PORT, () => {
       console.log(`Backend server running on http://localhost:${PORT}`);
   });
   