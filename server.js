const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Username, Email, Password, Date of Birth");
});

app.post('/login', (req, res) => {
    const { username, email, password, dob } = req.body;

    if (!username) {
        return res.status(400).json({ err: "Username cannot be empty" });
    }
    if (!email) {
        return res.status(400).json({ err: "Email cannot be empty" });
    }
    if (!password || password.length < 8 || password.length > 16) {
        return res.status(400).json({ err: "Password length should be between 8 and 16 characters" });
    }
    if (!dob) {
        return res.status(400).json({ err: "Date of Birth cannot be empty" });
    }

    res.status(200).json({
        msg: "Login successful",
        data: { username, email, password, dob }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});