import React from "react";

const cardStyle = {
  backgroundColor: "#DAF074",
  borderRadius: "10px",
  padding: "30px 2rem",

  maxWidth: "1100px",
  margin: "0 auto",
};

const cardContentStyle = {
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
};

const cardTextContent = {
  // display: "flex",
  // flexDirection: "column",
  // gap: "10px",
};

const cardButtonStyle = {
  padding: "10px 20px",
  color: "#DAF074",
  borderRadius: "25px",
  backgroundColor: "black",
  border: "none",
  cursor: "pointer",
  textTransform: "uppercase",

  marginTop: "1rem",
  textAlign: "center",
};

const mediaQuery = `
  @media (min-width: 768px) {
    .cardContent {
      display:flex;
      
      justify-content: space-between !important;
      align-items : center !important;

    }
    .cardText {
      width:20rem !important;
    }
    .firstSpan {
      font-size: 24px !important;
     
     
    }
   .btnStyle {
   
    textAlign: center !important;

   }
  
  }
`;

const Card = () => {
  return (
    <div style={cardStyle}>
      <style>{mediaQuery}</style>
      <div style={cardContentStyle} className="cardContent">
        <div style={cardTextContent} className="cardText">
          <div
            style={{ fontSize: "18px", fontWeight: "800" }}
            className="firstSpan"
          >
            Our commitment to diversity, equity , and inclusion{" "}
          </div>
          <div style={{ fontSize: "10px" }}>
            To find out how fast you type, just start typing in the blank
            textbox on the right of the test prompt. You will see your progress,
            including errors on the left side as you type You can fix errors as
            you go, or correct them at the end with the help of the spell
            checker. If you need
          </div>
        </div>
        <div>
          <div style={cardButtonStyle} className="btnStyle">
            read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
