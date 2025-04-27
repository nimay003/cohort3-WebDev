const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
    // send request by postman
  const data = req.body;
  console.log('Received data:', data);

  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});