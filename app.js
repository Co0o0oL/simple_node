require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('✅ Health OK'));
app.get('/secrets', (req, res) => {
    res.json({
        api_key: process.env.API_KEY || 'Not set',
        db_password: process.env.DB_PASSWORD || 'Not set'
    });
})

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));