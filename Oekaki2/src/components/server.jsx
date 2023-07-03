const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Session configuration
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Dummy user data (replace with your user database or API calls)
const users = [
  { id: 1, username: 'user1', password: '$2b$10$lNdqSmx2pMIsVe6f/k9J9ub6fkrDdQ.G4K6C1YOEVc7D1Vxy5Ht3a' }, // password: 'password1'
  { id: 2, username: 'user2', password: '$2b$10$6p4sNoaFC5YdH0fsfm.lT.mfbuawrZp7BImUm3F6W/.eAvv9sJLP.' }  // password: 'password2'
];

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find((user) => user.username === username);

  // If the user is not found or password doesn't match, return an error
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Set the user ID in the session
  req.session.userId = user.id;

  // Return success response
  res.json({ message: 'Login successful' });
});

// Logout route
app.post('/api/logout', (req, res) => {
  // Destroy the session
  req.session.destroy();

  // Return success response
  res.json({ message: 'Logout successful' });
});

// Protected route
app.get('/api/data', (req, res) => {
  // Check if the user is authenticated
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Get the user data based on the session user ID
  const user = users.find((user) => user.id === req.session.userId);

  // Return the user data
  res.json({ username: user.username, message: 'Protected data' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
