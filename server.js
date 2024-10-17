const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));
app.use(express.static(path.join(__dirname, 'src/mixins')));

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/pages'));

// Serve the landing page
app.get('/', (req, res) => {
  res.render('landing'); // This corresponds to landing.pug
});

// Serve the rigid page
app.get('/rigid', (req, res) => {
  res.render('rigid'); // This corresponds to rigid.pug
});

// Start the server
// const PORT = process.env.PORT || 8889;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
module.exports = app;