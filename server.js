const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.) if any
app.use(express.static("public"));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const { name, _replyto, message } = req.body;

  // Create a nodemailer transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password",
    },
  });

  // Compose the email
  const mailOptions = {
    from: "your-email@example.com",
    to: "your-email@example.com",
    subject: "New contact form submission",
    text: `Name: ${name}\nEmail: ${_replyto}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error occurred while sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
