
const express = require('express');
const app = express();
app.get('/user', (req, res) => res.send('User service is running!'));
app.listen(4000, () => console.log('User service on port 4000'));
