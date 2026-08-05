import React from "react";
import hero from "../assets/hero.png";

function CSBSStylingA() {
  const [cardStyle, setCardStyle] = React.useState({
    backgroundColor: "red",
    width: "350px",
  });
  return (
    <div>
      <h1>Dynamic Inline Styling</h1>
      <div style={cardStyle}>
        <img src={hero} alt="" />
      </div>

      <select
        name="color"
        id="color"
        onChange={(e) =>
          setCardStyle({ ...cardStyle, backgroundColor: e.target.value })
        }
      >
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default CSBSStylingA;
