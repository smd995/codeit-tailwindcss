import clsx from "clsx";

const BASE_STYLES = "inline-flex items-center font-medium rounded";

const VARIANT_STYLES = {
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

const SIZE_STYLES = {
  xs: "px-1.5 py-0.5 text-xs",
  sm: "px-2.5 py-0.5 text-sm",
  md: "px-3 py-1 text-base",
};

const OUTLINED_BASE_STYLES = "border bg-transparent";

const OUTLINED_STYLES = {
  primary: "border-blue-500 text-blue-500",
  success: "border-green-500 text-green-500",
  warning: "border-yellow-500 text-yellow-500",
  danger: "border-red-500 text-red-500",
  info: "border-blue-400 text-blue-400",
};

const ROUNDED_STYLES = "rounded-full";

const DOT_BASE_STYLES = "mr-1.5 h-2 w-2 rounded-full";

const DOT_COLOR_STYLES = {
  primary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  info: "bg-blue-400",
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};

const Badge = ({
  children,
  variant = "primary",
  size = "sm",
  outlined = false,
  rounded = false,
  withDot = false,
  className,
}: BadgeProps) => {
  const badgeClasses = clsx(
    BASE_STYLES,
    !outlined && VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    outlined && OUTLINED_BASE_STYLES,
    outlined && OUTLINED_STYLES[variant],
    rounded && ROUNDED_STYLES,

    className,
  );

  const dotClasses = clsx(DOT_BASE_STYLES, DOT_COLOR_STYLES[variant]);

  return (
    <div className={clsx(badgeClasses, "")}>
      {withDot && <span className={clsx(dotClasses, "")}></span>}
      {children}
    </div>
  );
};

export default Badge;
