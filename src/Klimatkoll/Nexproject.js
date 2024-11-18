import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'; // Or replace with <a> tag for external links

function Nextproject() {
  const containerStyle = {
    backgroundColor: "#E46698",
    height: "70vh", // Changed to 50vh
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "20px",
  };

  const nextProjectStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "20px",
    borderBottom: "3px solid white",
    paddingBottom: "5px",
  };

  const logoStyle = {
    fontWeight: "bold",
    textTransform: "lowercase",
    
    marginBottom: "10px",
    transition: "transform 0.2s ease, color 0.3s ease",
    display: "inline-block",
  };

  const largeTStyle = {
    fontSize: "clamp(20px, 4vw, 50px)",
 
  };

  const logoHoverStyle = {
    transform: "scale(1.1)",
    color: "#FFD700",
  };

  const subtitleStyle = {
    
    marginTop: "5px",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <span style={nextProjectStyle}>NEXT PROJECT</span>

      {/* Link to another page or external URL */}
      <Link 
        to="/techcity" // You can replace this with an external URL or route
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ textDecoration: "none", color: "inherit" }} // No underline or color change
      >
        <p style={isHovered ? { ...logoStyle, ...logoHoverStyle } : logoStyle}>
          <h3 style={largeTStyle}>TechCity</h3>
 
        </p>
      </Link>

      <p style={subtitleStyle}>End-to-end website + branding</p>
    </div>
  );
}

export default Nextproject;


