import React from "react";
import "../../styles/ButtonUp.css";
export default function ButtonUpIcon(props) {
  return (
    <svg className="button-up" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        className="button-up-mainpath"
        d="M142.297 89.224c0 18.585-15.025 33.638-33.543 33.638-18.517 0-33.542-15.053-33.542-33.638 0-18.585 15.025-33.638 33.542-33.638 18.518 0 33.543 15.053 33.543 33.638Z"
      />
      <g filter="url(#a)">
        <ellipse
          className="button-up-ellipse"
          cx={107.035}
          cy={87.069}
          rx={36.542}
          ry={37.069}
        />
        <path
          className="button-up-path2"
          d="M141.577 87.069c0 19.395-15.492 35.069-34.542 35.069s-34.543-15.674-34.543-35.069C72.492 67.674 87.984 52 107.035 52c19.05 0 34.542 15.674 34.542 35.069Z"
        />
      </g>
      <path
        className="button-up-pathText"
        d="M88.054 99.73V94.35h-2.085v-1.25h5.678v1.25h-2.085v5.378h-1.508ZM91.274 99.73l2.904-6.628h1.49l2.913 6.627h-1.583l-2.382-5.851h.595l-2.392 5.851h-1.545Zm1.452-1.42.4-1.166h3.351l.41 1.165h-4.16ZM100.606 98.215l-.084-1.771 3.118-3.342h1.676l-2.811 3.077-.838.909-1.061 1.127Zm-1.35 1.514v-6.627h1.499v6.627h-1.498Zm4.459 0-2.318-2.887.987-1.09 3.09 3.977h-1.759ZM107.533 95.772h3.137v1.193h-3.137v-1.193Zm.112 2.727h3.546v1.23h-5.045v-6.627h4.924v1.23h-3.425V98.5ZM115.026 99.73v-6.628h1.248l2.773 4.677h-.661l2.727-4.677h1.238l.019 6.627h-1.415l-.009-4.421h.26l-2.177 3.72h-.68l-2.224-3.72h.316v4.421h-1.415ZM125.302 95.772h3.137v1.193h-3.137v-1.193Zm.112 2.727h3.546v1.23h-5.044v-6.627h4.923v1.23h-3.425V98.5ZM102.906 111.205c-.925 0-1.648-.262-2.169-.786-.521-.524-.782-1.272-.782-2.244v-3.711h1.508v3.654c0 .632.127 1.086.381 1.364.255.278.612.416 1.071.416.459 0 .816-.138 1.07-.416.255-.278.382-.732.382-1.364v-3.654h1.489v3.711c0 .972-.261 1.72-.782 2.244-.521.524-1.244.786-2.168.786ZM107.346 111.091v-6.627h2.82c.583 0 1.086.097 1.508.293.422.189.748.464.977.824.23.36.345.789.345 1.288 0 .492-.115.918-.345 1.278-.229.36-.555.637-.977.833-.422.189-.925.284-1.508.284h-1.982l.67-.691v2.518h-1.508Zm1.508-2.348-.67-.729h1.898c.466 0 .813-.101 1.043-.303.229-.202.344-.483.344-.842 0-.367-.115-.651-.344-.853-.23-.202-.577-.303-1.043-.303h-1.898l.67-.729v3.759ZM114.163 108.791l-.289-4.327h1.732l-.289 4.327h-1.154Zm.577 2.376a.858.858 0 0 1-.642-.256.832.832 0 0 1-.252-.605c0-.24.084-.439.252-.597a.878.878 0 0 1 .642-.246c.267 0 .481.082.642.246a.784.784 0 0 1 .251.597.831.831 0 0 1-.251.605c-.161.171-.375.256-.642.256Z"
      />
      <path
        className="button-up-pathSymbol"
        d="M119.502 85.345h-7.735l-6.962-21.109h4.459l-6.961 21.109h-7.736l8.418-24.138h8.099l8.418 24.138Z"
      />
      <defs>
        <filter
          className="button-up-filter"
          id="a"
          x={0.492}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-10} dy={10} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_843_4206"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_843_4206"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
