const SectionHeading = ({ text, classDeclaration }) => {
  return <h2 className={`${classDeclaration} section-heading`}>{text}</h2>;
};

export default SectionHeading;
