import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const CheckMark = (props) => {
  const { circleColor, width, height, tick } = props;
  return (
    <div
      style={{
        backgroundColor: circleColor,
        borderRadius: 50,
        width: width,
        height: height,
      }}
    >
      {tick && (
        <CheckRoundedIcon style={{ fontSize: "5rem", color: "#161e3c" }} />
      )}
    </div>
  );
};

export default CheckMark;
