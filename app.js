const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alamanova05@gmail.com',
            pass: 'xhkx rbem uxni evnv'
        }
    });

    const mailOptions = {
        from: 'alamanova05@gmail.com',
        to: email,
        subject: subject,
        text: `Hello ${name}!\nYou received a new message: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
