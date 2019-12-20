const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.status(200).send({ name: 'Hatula', id: 'meow@49' });
});

module.exports = app;
