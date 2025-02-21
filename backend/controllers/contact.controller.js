import Contact from "../model/contact.model.js";
import nodemailer from "nodemailer";

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
  auth: {
    user: "cse.tukai@gmail.com", // Replace with your email
    pass: "ffll jknl wpuy vdwn", // Replace with your email password or app-specific password
  },
});

const Contactmessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Save the contact message to the database
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });
    await newContact.save();

    // Email to admin
    const adminMailOptions = {
      from: email,
      to: "pranabbhowmik@valourithm.com", // Admin email
      subject: `New Contact Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Email to user (automatic response)
    const userMailOptions = {
      from: "cse.tukai@gmail.com",
      to: email, // User's email
      subject: "Thank you for contacting us!",
      text: "Hi, Welcome to FreeXEress. We have received your message and will get back to you soon.",
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // Respond to the client
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error in contact", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default Contactmessage;
