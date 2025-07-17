import React, { FC } from 'react';
import cs from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const buttonVariants = {
  primary:
    'text-white bg-gray-700 border border-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5',
  secondary:
    'text-white bg-gray-900 border border-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5',
  tertiary:
    'text-white bg-zinc-700 border border-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5',
};

const Button: FC<ButtonProps> = ({
  label = 'Soy un botón',
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cs(buttonVariants[variant], className)}
    >
      {label}
    </button>
  );
};

export default Button;
