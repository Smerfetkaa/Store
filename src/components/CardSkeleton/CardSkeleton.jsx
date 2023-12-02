import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = () => {
  return (
    <ContentLoader
      height={313}
      width={330}
      gradientRatio={1}
      backgroundColor="#8a8a8a"
      backgroundOpacity={0.1}
      foregroundColor="#999999"
      foregroundOpacity={0.2}
    >
      <rect x="12" y="0" rx="5" ry="5" width="300" height="230" />
      <rect x="12" y="240" rx="4" ry="4" width="300" height="16" />
      <rect x="10" y="280" rx="3" ry="3" width="60" height="24" />
      <rect x="200" y="270" rx="3" ry="3" width="50" height="50" />
      <rect x="260" y="270" rx="3" ry="3" width="50" height="50" />
    </ContentLoader>
  );
};

export default CardSkeleton;
