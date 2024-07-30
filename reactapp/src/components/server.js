const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let cards = []; // This should be replaced with a database in production

// GET cards
app.get('/api/cards', (req, res) => {
    res.json(cards);
});

// POST a new card
app.post('/api/cards', (req, res) => {
    const newCard = req.body;
    cards.push(newCard);
    res.status(201).json(newCard);
});

// DELETE a card
app.delete('/api/cards/:id', (req, res) => {
    const { id } = req.params;
    cards = cards.filter(card => card.id !== id);
    res.status(204).end();
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
