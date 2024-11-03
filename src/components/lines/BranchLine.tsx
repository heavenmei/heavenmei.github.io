import React from "react";

interface BranchLineProps {
  size?: "small" | "default";
  type?: BranchLineStyle;
  styles?: any;
  color?: string;
  height?: number;
}

export enum BranchLineStyle {
  GREEN = "green",
  PURPLE = "purple",
  RED = "red",
}
const BranchLineStyleMap = {
  [BranchLineStyle.GREEN]: {
    color: "#2EA043",
    circle: "filter_green",
    line: "paint_linear_green",
  },
  [BranchLineStyle.PURPLE]: {
    color: "#A371F7",
    circle: "filter_purple",
    line: "paint_linear_purple",
  },
  [BranchLineStyle.RED]: {
    color: "#EA6045",
    circle: "filter_red",
    line: "paint_linear_red",
  },
};

const BranchLine: React.FC<BranchLineProps> = ({
  size = "default",
  type = BranchLineStyle.PURPLE,
  styles = { transform: `translateY(-4px)` },
}) => {
  const { circle, line, color } = BranchLineStyleMap[type];

  const SmallSize = (
    <svg
      width="61"
      height="150"
      viewBox="0 0 61 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00009 0L5.00003 10.3666C4.99998 18.8675 10.3556 27.0563 20 33.3019C29.6444 39.5477 35 47.7365 35 56.2373V93.2985C35 101.892 29.6532 110.178 20 116.545C10.3468 122.912 5.00007 131.198 5.00004 139.792L5 150"
        stroke={`url(#${line})`}
        strokeWidth="2.7931"
      />
      <g filter={`url(#${circle})`}>
        <path
          d="M36 70C39.3137 70 42 72.6863 42 76C42 79.3137 39.3137 82 36 82C32.6863 82 30 79.3137 30 76C30 72.6863 32.6863 70 36 70Z"
          fill="black"
        />
        <path
          d="M36 71.3979C38.5416 71.3979 40.602 73.4583 40.602 76C40.602 78.5416 38.5416 80.6021 36 80.6021C33.4583 80.6021 31.3979 78.5416 31.3979 76C31.3979 73.4583 33.4583 71.3979 36 71.3979Z"
          stroke="white"
          strokeWidth="2.7931"
        />
      </g>
      <rect x="5" width="3" height="150" fill={color} />
      <defs>
        <filter
          id="filter_purple"
          x="11.3793"
          y="51.3793"
          width="49.2414"
          height="49.2414"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.98276" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_28_167"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.31034" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_28_167"
            result="effect2_dropShadow_28_167"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.32759" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_28_167"
            result="effect3_dropShadow_28_167"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.98276" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_28_167"
            result="effect4_dropShadow_28_167"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_28_167"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint_linear_purple"
          x1="16.3793"
          y1="1.36802e-09"
          x2="16.1019"
          y2="150.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0515742" stopColor="#7D30FE" stopOpacity="0" />
          <stop offset="0.252417" stopColor="#A371F7" />
          <stop offset="0.441119" stopColor="#B995F6" />
          <stop offset="0.522324" stopColor="#D9C2FF" />
          <stop offset="0.601552" stopColor="#A371F7" />
          <stop offset="0.799379" stopColor="#B995F6" />
          <stop offset="0.925493" stopColor="#7D30FE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div style={{ ...styles }}>
      {size === "default" ? (
        <svg
          width="85"
          height="300"
          viewBox="0 0 85 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00016 0L5.00005 20.7333C4.99996 37.7349 14.64 54.1126 32 66.6037C49.3598 79.0955 58.9999 95.473 58.9999 112.475V186.597C58.9999 203.784 49.3757 220.356 32 233.09C14.6243 245.823 5.00012 262.396 5.00007 279.583L5 300"
            stroke={`url(#${line})`}
            strokeWidth="2.7931"
          />
          <g filter={`url(#${circle})`}>
            <path
              d="M59.4078 144.84C62.7182 144.84 65.4019 147.523 65.4019 150.834C65.4019 154.144 62.7182 156.828 59.4078 156.828C56.0974 156.828 53.4138 154.144 53.4138 150.834C53.4138 147.523 56.0974 144.84 59.4078 144.84Z"
              fill="black"
            />
            <path
              d="M59.4078 146.236C61.9469 146.236 64.0053 148.295 64.0053 150.834C64.0053 153.373 61.9469 155.431 59.4078 155.431C56.8687 155.431 54.8103 153.373 54.8103 150.834C54.8103 148.295 56.8687 146.236 59.4078 146.236Z"
              stroke="white"
              strokeWidth="2.7931"
            />
          </g>
          <rect x="5" width="3" height="300" fill={color} />
          <defs>
            <filter
              id="filter_green"
              x="34.7931"
              y="126.219"
              width="49.2295"
              height="49.2295"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98276" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_28_159"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9.31034" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_28_159"
                result="effect2_dropShadow_28_159"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.32759" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_28_159"
                result="effect3_dropShadow_28_159"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98276" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.395098 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_dropShadow_28_159"
                result="effect4_dropShadow_28_159"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect4_dropShadow_28_159"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint_linear_green"
              x1="25.4827"
              y1="2.73605e-09"
              x2="24.8662"
              y2="300.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0515742" stopColor="#196C2E" stopOpacity="0" />
              <stop offset="0.225992" stopColor="#2EA043" />
              <stop offset="0.47249" stopColor="#2EA043" />
              <stop offset="0.522324" stopColor="#56D364" />
              <stop offset="0.561417" stopColor="#2EA043" />
              <stop offset="0.791714" stopColor="#2EA043" />
              <stop offset="0.956186" stopColor="#196C2E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <defs>
            <filter
              id="filter_red"
              x="35.7931"
              y="126.219"
              width="49.2295"
              height="49.2295"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98276" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.486275 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_38_305"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9.31034" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.486275 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_38_305"
                result="effect2_dropShadow_38_305"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.32759" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.486275 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_38_305"
                result="effect3_dropShadow_38_305"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98276" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.486275 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_dropShadow_38_305"
                result="effect4_dropShadow_38_305"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect4_dropShadow_38_305"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint_linear_red"
              x1="26.4827"
              y1="2.73605e-09"
              x2="25.8662"
              y2="300.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0515742" stopColor="#AC3220" stopOpacity="0" />
              <stop offset="0.225992" stopColor="#EA6045" />
              <stop offset="0.47249" stopColor="#EA6045" />
              <stop offset="0.522324" stopColor="#FFA28B" />
              <stop offset="0.561417" stopColor="#EA6045" />
              <stop offset="0.791714" stopColor="#EA6045" />
              <stop offset="0.956186" stopColor="#AC3220" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        SmallSize
      )}
    </div>
  );
};

export default BranchLine;
