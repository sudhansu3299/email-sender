const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors({
    origin: 'https://sudhansu-s-suprise.netlify.app' // Replace with your Netlify URL
}));
app.use(express.json());

app.post('/api/sendEmail', async (req, res) => {
    const msg = {
        to: 'sudhansu3299@gmail.com',
        from: 'ransomguy69@gmail.com',
        subject: 'Date Night',
        text: 'It is a yes!',
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
