const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

app.get('/proxy', async (req, res) => {
  try {
    const imageUrl = req.query.url;
    const response = await fetch(imageUrl);
    const imageBuffer = await response.buffer();

    // Set appropriate headers
    res.set('Content-Type', response.headers.get('content-type'));
    res.set('Content-Length', response.headers.get('content-length'));

    // Send image data to client
    res.write(imageBuffer);
    res.end();
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
