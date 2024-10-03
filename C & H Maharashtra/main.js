import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path.js';
import bcrypt from 'bcrypt';
import User from './models/userSchema.js';
import fs from 'fs'; 

const app = express();



var i=0;
app.use(express.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();


app.set('views', './views');



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Home Page");
    res.render('Home');
});

app.get('/culture', (req, res) => {
    console.log("Culture Page");
    res.render('Culture');
});

app.get('/heritage', (req, res) => {
    console.log("Heritage Page");
    res.render('Heritage');
});

app.get('/contact', (req, res) => {
    console.log("Contact Page");
    res.render('Contact');
});

app.get('/review', (req, res) => {
    console.log("Review Page");
    res.render('review');
});

app.get('/Konkan', (req, res) => {
    console.log("Konkan");
    res.render('Konkan');
});

app.get('/Mumbai', (req, res) => {
    console.log("Mumbai");
    res.render('Mumbai');
});

app.get('/Vidarbha', (req, res) => {
    console.log("Vidarbha");
    res.render('Vidarbha');
});

app.get('/Marathwada', (req, res) => {
    console.log("Marathwada");
    res.render('Marathwada');
});

app.get('/western_maha', (req, res) => {
    console.log("Western Maha");
    res.render('western_maha');
});


app.get('/North_maha', (req, res) => {
    console.log("North_maha");
    res.render('North_maha');
});

app.get('/Konkan_2', (req, res) => {
    console.log("Konkan_2");
    res.render('Konkan_2');
});

app.get('/Vidarbha_2', (req, res) => {
    console.log("Vidarbha_2");
    res.render('Vidarbha_2');
});

app.get('/Marathwada_2', (req, res) => {
    console.log("Marathwada_2");
    res.render('Marathwada_2');
});

app.get('/western_maha_2', (req, res) => {
    console.log("Western maha_2");
    res.render('western_maha_2');
});

app.get('/North_maha_2', (req, res) => {
    console.log("North_maha_2");
    res.render('North_maha_2');
});

// app.post('/submit-review', (req, res) => {
//     const { name, email, review } = req.body;
//     const reviewData = `Name: ${name}\nEmail: ${email}\nReview: ${review}\n\n`;

//     fs.appendFile('reviews.txt', reviewData, (err) => {
//         if (err) {
//             console.error('Error saving review:', err);
//             return res.status(500).send('Internal Server Error');
//         }
//         // Render the review page with a success message
//         res.render('review', { successMessage: 'Thank you for your review!' });
//     });
// });

app.post('/submit-review', (req, res) => {
    const { name, email, review } = req.body;
    const reviewData = `Name: ${name}\nEmail: ${email}\nReview: ${review}\n\n`;

    fs.appendFile('reviews.txt', reviewData, (err) => {
        if (err) {
            console.error('Error saving review:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Thank you for your review!');
    });
});

app.use((req, res, next) => {
    console.log("Received request body:", req.body);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
