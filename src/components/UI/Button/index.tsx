import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "filled" | "outlined";

export type ButtonProps = {
  /**
   * the variant of the button to use
   * @default 'filled'
   */
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyles: { [key in ButtonVariant]: string } = {
  filled: "bg-quaternary text-primary",
  outlined: "bg-transparent text-primary border border-primary",
};

const basicStyle =
  "rounded-xl px-3 py-1 font-semibold duration-300 hover:brightness-125";

export function Button({
  variant = "filled",
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const disabledStyle = disabled ? "opacity-80 cursor-not-allowed" : "";
  return (
    <button
      type="button"
      {...{ disabled }}
      className={`${className} ${basicStyle} ${ButtonStyles[variant]} ${disabledStyle}`}
      {...rest}
    >
      {children}
    </button>
  );
}
