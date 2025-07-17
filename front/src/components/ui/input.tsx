import React from "react";
import clsx from "clsx";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: React.ReactNode;
  error?: string;
  
}

const Input = ({ label, id, className, children, error, ...rest }:InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-black dark:text-black"
        style={{ background: '' }}

      >
      {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          className={clsx(
          "bg-gray-200 text-gray-900 border border-gray-500 text-sm rounded-lg",
          "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10",
          "dark:bg-gray-400 dark:text-white dark:border-gray-600 dark:placeholder-gray-400",
          "pr-10",
            className
          )}
          {...rest}
        />
        {children && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"> 
                    {children}
          </div>
        )}
      </div>
      {error && <span className="text-red-300 my-2">{error}</span>}
    </div>
  );
};

export default Input;
