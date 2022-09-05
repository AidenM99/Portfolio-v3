const AboutMe = () => {
  return (
    <div className="about-me">
      <p className="about-para-one">
        I'm a front-end developer who is fully committed to the philosophy of
        lifelong learning. Understanding and then leveraging new technologies to
        create functional, feature-rich applications is what drives my passion
        for web development. I work with JavaScript, React, Material UI, SASS
        and Bootstrap to deliver quality front-end applications.
      </p>

      <p className="about-para-two">
        If you like the{" "}
        <a href="#projects" className="highlighted-link">
          work
        </a>{" "}
        you see, don't hesitate to{" "}
        <a href="#contact" className="highlighted-link">
          reach out
        </a>
        .
      </p>
    </div>
  );
};

export default AboutMe;
