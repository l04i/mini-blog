const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

const dbURI = 'mongodb+srv://l04i:134679582@cluster0.cqprq.mongodb.net/blog-website';
mongoose.connect(dbURI).then((result) => {
    app.listen(3000);
}).catch((error) => {
    console.log(error);
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));





app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});