import React, { useState } from "react";
// import nodemailer from "nodemailer";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const sendEmail = async (formData) => {
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "your-email@gmail.com",
//             pass: "your-email-password",
//         },
//     });

//     let mailOptions = {
//         from: formData.email,
//         to: "ogagaadjaro@ga9l.com",
//         subject: `Message from ${formData.name}`,
//         text: formData.message,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         alert("Email sent successfully!");
//     } catch (error) {
//         console.error("Error sending email:", error);
//         alert("Failed to send email.");
//     }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    // await sendEmail(formData);
    setFormData({ name: "", email: "", message: "" });
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;


