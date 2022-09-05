const SkillIcon = ({ icon, text, delay }) => {
  return (
    <div
      className="skill-icon-container"
      data-aos={delay || delay === 0 ? "fade-in" : null}
      data-aos-duration={delay || delay === 0 ? "500" : null}
      data-aos-delay={delay || delay === 0 ? delay : null}
      data-aos-anchor={delay || delay === 0 ? ".skills" : null}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SkillIcon;
