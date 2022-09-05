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
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor=".contact-form"
      >
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        ></input>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
        data-aos-anchor=".contact-form"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        ></input>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-anchor=".contact-form"
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        ></input>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="150"
        data-aos-anchor=".contact-form"
      >
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div
        className="submit-button-container"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-anchor=".contact-form"
      >
        <Button type="submit" text="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
