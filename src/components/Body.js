import React from "react";

const Body = ({src, name, position }) => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={src} alt={name} style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>{name}</h2>
          <p style={styles.position}>{position}</p>
        </div>
      </div>
    </main>
  );
};



const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "250px",
    height: "200px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
