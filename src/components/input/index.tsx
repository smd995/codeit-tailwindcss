import clsx from "clsx";

const BASE_STYLES =
  "w-full rounded border transition-colors focus:ring-2 focus:outline-none";

const SIZE_STYLES = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const VARIANT_STYLES = {
  default: "border-gray-300 focus:border-blue-500 focus:ring-blue-200",
  filled:
    "border-transparent bg-gray-100 focus:border-blue-500 focus:bg-white focus:ring-blue-200",
  outlined:
    "border-gray-300 bg-transparent focus:border-blue-500 focus:ring-blue-200",
};

const ERROR_STYLES = "border-red-500 focus:border-red-500 focus:ring-red-200";

const DISABLED_STYLES = "cursor-not-allowed bg-gray-100 text-gray-400";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type = "text",
  placeholder,
  label,
  error,
  size = "md",
  variant = "default",
  fullWidth = false,
  disabled = false,
  className,
  onChange,
  ...props
}: InputProps) => {
  const inputWrapperClasses = clsx(fullWidth && "w-full");

  const labelClasses = clsx(
    "mb-2 block font-medium",
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
    },
    disabled && "text-gray-400",
    error && "text-red-600",
  );

  const inputClasses = clsx(
    BASE_STYLES,
    SIZE_STYLES[size],
    VARIANT_STYLES[variant],
    error && ERROR_STYLES,
    disabled && DISABLED_STYLES,
    className,
  );

  const errorClasses = "mt-1 text-sm text-red-600";

  return (
    <div className={inputWrapperClasses}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={inputClasses}
        {...props}
      />
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
};

export default Input;
