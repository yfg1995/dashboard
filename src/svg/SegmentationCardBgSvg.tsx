import { FC } from "react";

export interface ISegmentationCardBgSvg {}

export const SegmentationCardBgSvg: FC<ISegmentationCardBgSvg> = () => {
  return (
    <svg
      width="80"
      height="112"
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path d="M80 0H0V112H80V0Z" fill="#2F49D1" />
      <path
        d="M48.2857 113.12C62.6864 69.8671 18.2857 45.92 14 0.839996"
        stroke="#FFFBFB"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <path
        d="M53.7143 112.56C68.115 69.3071 36.2857 42.84 35.7143 0.559998"
        stroke="#FFFBFB"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <path
        d="M60.2857 112C74.6864 68.7471 56.8571 40.6 56.2857 -1.67999"
        stroke="#FFFBFB"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
    </svg>
  );
};
