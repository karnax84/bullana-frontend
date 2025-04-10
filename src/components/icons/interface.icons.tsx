export interface IconProps {
  size?: string;
  color?: string;
  secondColor?: string;
  style?: React.CSSProperties;
}

export interface ArrowIconProps extends IconProps {
  dir?: "up" | "down" | "left" | "right";
}
