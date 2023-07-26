import "./header.css";
import logoimage from "./logo.png"

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleAboutClick = () => {
    window.location.reload();
  };

  const handleContactClick = () => {
    window.location.reload();
  };

  const handlePricingClick = () => {
    window.location.reload();
  };

  return (
    <div className="main-container">
      <img
        className="logo"
        src={ logoimage } 
        onClick={handleLogoClick}
      />
      <div className="header-container">
        <h3 onClick={handleAboutClick}>About</h3>
        <h3 onClick={handleContactClick}>Contact</h3>
        <h3 className="pricing" onClick={handlePricingClick}>Pricing</h3>
      </div>
    </div>
  );
};

export default Header;
