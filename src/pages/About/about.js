import React from "react";
import Card from "./card";
import ExecutiveProfileCard from "./executiveProfileCard";

const headerStyle = {
  display: "flex",
  gap: "1rem",
  maxWidth: "1100px",
  margin: "0 auto",
  minHeight: "20rem",
  padding: "2.5rem",
};

const mediaQuery = `
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    
    }
  }
`;

export default function About() {
  return (
    <>
      <style>{mediaQuery}</style>
      <div style={{ backgroundColor: "#121D09" }}>
        <div style={headerStyle} className="header">
          <span
            style={{
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: "500",
              color: "#556830",
            }}
          >
            we belive
          </span>
          <span
            style={{
              width: "16rem",
              fontSize: "22px",
              fontWeight: "500",
              color: "#535B47",
            }}
          >
            great leadership is essential because change starts at the top{" "}
          </span>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-8rem",
            left: "3rem",
            right: "3rem",
          }}
        >
          <Card />
        </div>
        <ExecutiveProfileCard />
      </div>
    </>
  );
}
export const Head = () => <title>About Page</title>;
