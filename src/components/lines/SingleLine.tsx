import React from "react";

interface SingleLineProps {
  styles?: any;
  height?: number;
  color?: string;
}

const SingleLine: React.FC<SingleLineProps> = ({
  height = 200,
  color = "linear-gradient(180deg, #D2A8FF 0%, #A371F7 10%, #196C2E 70%, #2EA043 80%, #56D364 100%)",
  styles,
}) => {
  return (
    <div
      className="w-[3px] rounded-md ml-[5px]"
      style={{ height: height, background: color, ...styles }}
    ></div>
  );
};

export default SingleLine;
