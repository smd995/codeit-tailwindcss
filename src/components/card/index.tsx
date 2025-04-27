import { clsx } from "clsx";

const BASE_STYLES = "transition-all";

const VARIANT_STYLES = {
  default: "border border-gray-200 bg-white",
  outlined: "border border-gray-500 bg-white hover:border-gray-400",
  elevated: "bg-white shadow-lg hover:shadow-xl",
};

const PADDING_STYLES = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

const RADIUS_STYLES = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className,
}: CardProps) => {
  const cardClasses = clsx(
    BASE_STYLES,
    VARIANT_STYLES[variant],
    PADDING_STYLES[padding],
    RADIUS_STYLES[radius],
    className,
  );

  return <div className={clsx(cardClasses)}>{children}</div>;
};

export default Card;
