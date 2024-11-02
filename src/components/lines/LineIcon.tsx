import React from "react";
import Image from "next/image";

interface LineIconProps {
  name: string;
  label?: string;
  color?: string;
  width?: number;
}

const LineIcon: React.FC<LineIconProps> = (props) => {
  const { name, color = "#DD7DF7", width = 32 } = props;
  return (
    <div
      className="relative my-4"
      style={{
        width: width,
        height: width,
        transform: `translateX(-30%)`,
      }}
    >
      <div
        className="blur-lg rounded-2xl "
        style={{ backgroundColor: color, width: width, height: width }}
      ></div>
      <Image
        style={{ transform: `translateY(-${width - 4}px) translateX(4px)` }}
        className="relative  "
        src={`/icons/${name}.svg`}
        width={width - 8}
        height={width - 8}
        alt=""
      />
    </div>
  );
};

export default LineIcon;
