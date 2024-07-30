const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
    const statusCodes = [200, 404, 502, 503];
    const randomIndex = Math.floor(Math.random() * statusCodes.length);
    const statusCode = statusCodes[randomIndex];
    res.status(statusCode).send(`Status code set to ${statusCode}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
