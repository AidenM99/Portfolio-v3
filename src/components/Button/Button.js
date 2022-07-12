const Button = ({ innerText }) => {
  return (
    <div className="button-container">
      <button className="button">{innerText}</button>
    </div>
  );
};

export default Button;
