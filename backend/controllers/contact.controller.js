import Contact from "../model/contact.model.js";

const Contactmessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });
    await newContact.save();
    res
      .status(201)
      .json(name, message, { message: "Message sent successfully" });
  } catch (error) {
    console.log("Error in contact", error.message);
  }
};

export default Contactmessage;
