import { type ReactNode } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading } from 'react-icons/ai';

interface ButtonProps {
  children: JSX.Element | ReactNode;
  rounded?: boolean;
  outline?: boolean;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  loading: boolean;
}

const Button = ({
  children,
  rounded = false,
  outline = false,
  primary = false,
  secondary = false,
  success = false,
  warning = false,
  danger = false,
  loading = false,
  ...args
}: ButtonProps) => {
  const buttonClasses = twMerge(
    classNames("flex items-center px-3 py-1.5 border h-8", {
      "opacity-80": loading,
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }),
  );

  return (
    <button disabled={loading} {...args} className={buttonClasses}>
      {loading ? <AiOutlineLoading className='animate-spin' /> : children}
    </button>
  );
};

export default Button;
