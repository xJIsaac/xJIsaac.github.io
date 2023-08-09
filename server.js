require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const { name, _replyto, message } = req.body;

  // Create a nodemailer transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Compose the email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New contact form submission",
    text: `Name: ${name}\nEmail: ${_replyto}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      const errorMessage = "An error occurred while sending the email.";
      res.status(500).json({ error: errorMessage }); // Send a status code indicating an error occurred
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully." }); // Send a status code indicating success
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
