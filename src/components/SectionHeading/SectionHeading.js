const SectionHeading = ({ text, classDeclaration }) => {
  return <h1 className={`${classDeclaration} section-heading`}>{text}</h1>;
};

export default SectionHeading;
