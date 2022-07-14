const Button = ({ innerText, link }) => {
  return (
    <a
      className="button-container"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <button className="button">{innerText}</button>
    </a>
  );
};

export default Button;
