import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzylgav",
        "template_xtoes1t",
        formRef.current,
        "t7QP4J4WaSPnFw-_3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        required
      ></input>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
      ></input>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      ></input>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <div className="submit-button-container">
        <Button type="submit" text="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
