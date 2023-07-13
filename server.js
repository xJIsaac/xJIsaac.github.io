const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const { name, _replyto, message } = req.body;

  // Create a nodemailer transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "jaime@jisaacworx.com",
      pass: "Guitar88!",
    },
  });

  // Compose the email
  const mailOptions = {
    from: "jaime@jisaacworx.com",
    to: "jaime@jisaacworx.com",
    subject: "New contact form submission",
    text: `Name: ${name}\nEmail: ${_replyto}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error occurred while sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});