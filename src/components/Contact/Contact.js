import SectionHeading from "../SectionHeading/SectionHeading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="section-darker">
      <a href="#" className="anchor" id="contact"></a>
      <div className="content-section">
        <SectionHeading
          text={"contact"}
          classDeclaration={"contact-section-heading"}
        />
        <p className="contact-para">
          I'm currently looking for a role as a front-end developer. If you have
          an offer or if you'd just like to chat, send me an email and I'll get
          back to you.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
