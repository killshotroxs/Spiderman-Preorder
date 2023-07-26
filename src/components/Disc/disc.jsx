import "./disc.css";

const Disc = () => {
  const handleButtonClick = () => {
    window.location.reload(); // Reload the page when the button is clicked
  };

  return (
    <div className="testing">
      <img
        className="disc"
        src="../../../images/discimage.png"
        alt="Disc Image"
      />
      <h1>
        {" "}
        <br></br>
        <br></br>
        <br></br>
        Be <span style={{ color: "red" }}>Greater.</span>
        <span style={{ color: "#4DBA86", fontSize: "120px" }}> Together.</span>
      </h1>
      <div>
        <button className="orderbutton" onClick={handleButtonClick}>
          Pre-Order Now
        </button>
      </div>
    </div>
  );
};

export default Disc;
