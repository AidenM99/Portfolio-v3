const SkillIcon = ({ icon, text }) => {
  return (
    <div className="skill-icon-container">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SkillIcon;
