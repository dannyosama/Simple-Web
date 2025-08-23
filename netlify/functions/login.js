   // netlify/functions/login.js
   exports.handler = async (event, context) => {
       const { username, password } = JSON.parse(event.body);

       // Mock user data (replace with your logic)
       const users = [
           { username: 'testuser', password: '##password123!' },
           { username: 'admin', password: '##adminpassword!' }
       ];

       const userFound = users.find(u => u.username === username && u.password === password);

       if (userFound) {
           return {
               statusCode: 200,
               body: JSON.stringify({ success: true, message: 'Login successful!' })
           };
       } else {
           return {
               statusCode: 401,
               body: JSON.stringify({ success: false, message: 'Invalid username or password.' })
           };
       }
   };
   