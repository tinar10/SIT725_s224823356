const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
    res.send('Hello SIT725 2.2P!');
});

app.get('/add', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);

    const output = n1 + n2

    res.send(`Result: ${output}`);

});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
