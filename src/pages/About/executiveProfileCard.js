import React from "react";
import executiveTeamImage from "../../../public/images/image-collection-4.png";

const cardData = [
  { userName: "carolyn", description: "co-founder and CEO" },
  { userName: "Lindsay", description: "co-founder and Chief Brand Officer" },
  { userName: "Trey Boynton", description: "Chief People & diversity Officer" },
  {
    userName: "Saana Rapakko Hunt",
    description: "Chief Product experience Officer",
  },
  { userName: "Chrissy Leo", description: "Vice president" },
  { userName: "Lindsay", description: "co-founder and Chief Brand Officer" },
  { userName: "Erika Jonas", description: "Chief Customer Officer" },
  { userName: "Trey Boynton", description: "Chief People & diversity Officer" },
];
const styleCard = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem 1rem",
};
const styleCardData = {
  display: "flex",
  flexDirection: "column",
};

const mediaQuery = `
@media (max-width: 768px) {
  .cardStyled {
    grid-template-columns: repeat(1, 1fr) !important;
    
  }
   .textStyle {
    padding-top:3rem !important;
   } 

}

`;

export default function ExecutiveProfileCard() {
  return (
    <div
      style={{
        backgroundColor: "#2E2A40",
        padding: "8rem 2.5rem 8rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <span
          style={{ fontSize: "22px", fontWeight: "500", color: "white" }}
          className="textStyle"
        >
          Executive Team{" "}
        </span>
        <style>{mediaQuery}</style>
        <div style={styleCard} className="cardStyled">
          {cardData.map((item, index) => (
            <div key={index}>
              <img
                style={{
                  borderRadius: "16px",
                  height: "10rem",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={executiveTeamImage}
                alt="Executive Team"
              />
              <div style={styleCardData}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {item.userName}
                </span>
                <span style={{ fontSize: "10px", color: "white" }}>
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
