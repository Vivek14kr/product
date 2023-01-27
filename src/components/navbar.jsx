import React from 'react'

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "blue",
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "2em",
          width: "fit-content",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Products
      </div>
      <div
        style={{
          padding: "2em",
          width: "fit-content",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {" "}
        WishList
      </div>
    </div>
  );
}

export default Navbar