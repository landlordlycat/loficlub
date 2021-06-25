import React,{useState} from "react";

function InstallAppPopup() {
  const [popupOpen, setpopupOpen] = useState(false)
  const popupStyle = {
    backgroundColor: "white",
    width: "15rem",
    color: "black",
    position: "absolute",
    top: "0px",
    right: "0px",
    padding: "2rem 1rem",
    zIndex: "1000",
    borderRadius: "0 0 0 2rem",
    display: popupOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem 2rem",
    marginTop: "1rem",
    borderRadius: "1rem",
  };
  const secondaryButtonStyle = {
    backgroundColor: "silver",
    padding: "0.5rem 2rem",
    marginTop: "1rem",
    borderRadius: "1rem",
  };
  return (
    <div style={popupStyle} id="install-popup">
      <p>Click here to Install App</p>
        <button style={buttonStyle} id ="install-button">Install App</button>
        <button style={secondaryButtonStyle} onClick={() => setpopupOpen(popupOpen => !popupOpen)}>Dismiss</button>
    </div>
  );
}

export default InstallAppPopup;
