import React from "react";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

export type PixelIconName =
  | "user"
  | "code"
  | "folder-git"
  | "business"
  | "graduation-cap"
  | "envelope"
  | "phone"
  | "globe"
  | "github"
  | "linkedin"
  | "twitter"
  | "heart"
  | "moon"
  | "sun"
  | "location-pin"
  | "external-link";

export type PixelIconSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<PixelIconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

interface PixelIconProps {
  name: PixelIconName;
  size?: PixelIconSize;
  className?: string;
  aria?: string;
}

export const PixelIcon = React.forwardRef<HTMLElement, PixelIconProps>(
  ({ name, size = "md", className = "", aria }, ref) => {
    const sizePixels = sizeMap[size];
    const classes = `hn hn-${name} ${className}`;

    return (
      <i
        ref={ref}
        className={classes}
        style={{
          fontSize: `${sizePixels}px`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          width: `${sizePixels}px`,
          height: `${sizePixels}px`,
          flexShrink: 0,
        }}
        aria-label={aria || name}
      />
    );
  },
);

PixelIcon.displayName = "PixelIcon";

export default PixelIcon;
