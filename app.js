const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

// app.get('*', (req, res) => res.sendFile(path.resolve(`${__dirname}/index.html`)));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));