import express from 'express';
import swig from 'swig';
import path from 'path';

const app = express();

// Set static dir
app.use(express.static('public'));

// This is where all the magic happens!
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));

// Express will cache the view files,disable it
app.set('view cache', false);

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/contact', (req, res) => {
    res.render('/pages/contact');
});

app.listen(3000, () => {
    console.log('http://localhost:3000/');
});
