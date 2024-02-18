import React, { InputHTMLAttributes, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NumericFormat } from "react-number-format";
import InputMask from "react-input-mask";

export interface InputProps {
  className?: string;
  label?: string;
  type?: string;
  isPassword?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  input?: InputHTMLAttributes<HTMLInputElement>;
  mask?: string;
  id: string;
  placeholder?: string;
}

interface InputIconProps {
  onClick?: () => void;
  children: React.ReactNode;
}

function InputIcon({ onClick, children }: InputIconProps) {
  return (
    <Slot onClick={onClick} className="h-4 w-4 text-gray-700">
      {children}
    </Slot>
  );
}

export const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = props.isPassword && !props.mask;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : props.type || "text";

  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block pl-2 text-sm font-medium text-gray-700"
        >
          {props.label}
        </label>
      )}
      <label
        className={`
          mt-1 flex h-6 items-center gap-3 border border-solid border-[#f7f7f7] shadow-md pr-2 py-4 ${
            props.error ? "border-red-500" : "border-gray-300"
          } w-full rounded-md bg-white text-xs text-gray-100 ring-blue-500 placeholder:text-gray-400 focus-within:border-0 focus-within:ring-2 focus-within:ring-transparent ${
            props.className
          }
            `}
      >
        {props.leftIcon && <InputIcon>{props.leftIcon}</InputIcon>}
        {props.mask ? (
          <InputMask
            {...props.input}
            inputMode={props.mask === "currency" ? "decimal" : "text"}
            id={props.id}
            type={inputType}
            className="rounded-lg border-transparent flex-1 bg-transparent text-xs text-gray-700 placeholder:text-gray-500"
            mask={props.mask}
            maskChar={null}
          />
        ) : (
          <input
            {...props.input}
            inputMode={props.type === "number" ? "numeric" : "text"}
            id={props.id}
            type={inputType}
            className="rounded-lg border-transparent flex-1 bg-transparent text-xs text-gray-700 placeholder:text-gray-500"
            placeholder={props.placeholder}
          />
        )}
        {isPasswordType ? (
          <InputIcon onClick={handleTogglePasswordVisibility}>
            {showPassword ? (
              <AiFillEyeInvisible className="cursor-pointer" />
            ) : (
              <AiFillEye className="cursor-pointer" />
            )}
          </InputIcon>
        ) : (
          props.rightIcon && <InputIcon>{props.rightIcon}</InputIcon>
        )}
      </label>
      {props.error && props.errorMessage && (
        <p className="mt-1 text-[0.625rem] font-bold text-red-500">
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};
