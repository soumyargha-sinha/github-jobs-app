const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/jobs'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/jobs/' }),
);

console.log('Started server.');
app.listen(process.env.PORT || 8080);