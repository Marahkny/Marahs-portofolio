import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'; // Or replace with <a> tag for external links

function Next() {
  const containerStyle = {
    backgroundColor: '#F5C518',
    height: "70vh", // Changed to 50vh
    color: 'black',
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
    borderBottom: "3px solid black",
    paddingBottom: "5px",
  };

  const logoStyle = {
    fontWeight: "bold",
    textTransform: "lowercase",
    
    marginBottom: "10px",
    transition: "transform 0.3s ease, color 0.2s ease",
    display: "inline-block",
  };

  const largeTStyle = {
    fontSize: "5rem",
    fontFamily: 'Patrick Hand, cursive' // Larger "T"
  };


  const logoHoverStyle = {
    transform: "scale(1.1)",
    color: '#E46698',
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    marginTop: "5px",
   
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <span style={nextProjectStyle}>NEXT PROJECT</span>

      {/* Link to another page or external URL */}
      <Link 
        to="/klimat" // You can replace this with an external URL or route
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ textDecoration: "none", color: "inherit" }} // No underline or color change
      >
        <h2 style={isHovered ? { ...logoStyle, ...logoHoverStyle } : logoStyle}>
          <p style={largeTStyle}>Klimatkoll</p>
        
        </h2>
      </Link>

      <p style={subtitleStyle}>End-to-end responsive website + branding + implementation</p>
    </div>
  );
}

export default Next;