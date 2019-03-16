const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => console.log(`TradeForGoals server now listening at port ${PORT}`));