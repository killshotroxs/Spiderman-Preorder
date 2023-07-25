import "./header.css";

const Header = () => {
  return (
    <div className="main-container">
      <img
        className="logo"
        src="../../../public/images/logo.png"
        alt="marvel logo"
      ></img>
      <div className="header-container">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Pricing</h3>
      </div>
    </div>
  );
};

export default Header;
