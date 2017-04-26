const express = require('express');

const hello = require('./handlers/hello');
const root = require('./handlers/root');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', root);

app.get('/hello', hello);

app.listen(8080);