const Avatar = ({ source }) => {
  return (
    <div className="avatar-container">
      <img className="avatar" alt="avatar" src={source}></img>
    </div>
  );
};

export default Avatar;
