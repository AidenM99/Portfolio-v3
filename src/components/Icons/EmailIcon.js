const EmailIcon = () => {
  const openEmail = () => {
    window.open("mailto:aiden.l.mcnaughton@gmail.com?");
  };

  return (
    <div className="icon-container" onClick={openEmail}>
      <i class="fa-solid fa-envelope fa-3x email-icon"></i>
    </div>
  );
};

export default EmailIcon;
