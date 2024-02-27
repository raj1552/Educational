import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

const contactUs = async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    if (!firstname || !lastname || !email || !message) {
      return res.status(401).json({ error: "Firstname, Lastname, Email & Message are required" });
    }

    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.email,
        pass: process.env.password
      }
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: process.env.email,
      to: email,
      subject: `Hi ${firstname}`,
      text: 'Thank you for sending a message. We will get back to you soon.'
    };

    const mailToYouOptions = {
      from: email,
      to: process.env.email,
      subject: `New Contact Us Message from ${firstname} ${lastname}`,
      text: `You have a new message from ${firstname} ${lastname} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email to user" });
      }
      
      transporter.sendMail(mailToYouOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "Failed to send email to yourself" });
        }

        res.status(200).json("Email sent successfully");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default { contactUs };
