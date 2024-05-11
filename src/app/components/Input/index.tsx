"use client";

import { Chevron } from "@/icons";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  containerStyles,
  inputStyles,
  inputTextStyles,
  labelStyles,
  labelTextStyles,
  selectIconStyles,
} from "./styles";
import { InputProps } from "./types";

export function Input({
  variant = "default",
  icon,
  label,
  placeholder,
  currentValue,
  onClick,
  width,
  isHovered = false,
  isInputDisabled = false,
  type = "text",
  onInputChange,
  onInputFocus,
  children,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleInputClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick();
    }
  }

  function handleInputChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (type === "select") return;

    setInputValue(target.value);

    onInputChange!(target.value);
  }

  function handleInputFocus() {
    setIsFocused(true);

    onInputFocus!();
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  useEffect(() => {
    if (inputRef.current && currentValue) {
      setInputValue(currentValue);
    } else if (currentValue === null) {
      setInputValue("");
    }
  }, [currentValue]);

  return (
    <div className={inputStyles()}>
      <span
        data-testid="input"
        data-isfocused={isFocused}
        data-ishovered={isHovered}
        data-variant={variant}
        className={containerStyles({ width })}
        onClick={handleInputClick}
        {...props}
      >
        <div>
          <span className={labelStyles()}>
            <span className={labelTextStyles()}>
              {icon && <span data-testid="input-icon">{icon}</span>}
              {label && <span data-testid="input-label">{label}</span>}
            </span>
            {type === "select" && (
              <span data-isfocused={isFocused} className={selectIconStyles()}>
                <Chevron />
              </span>
            )}
          </span>

          <input
            readOnly={variant === "mobile" && type === "select"}
            ref={inputRef as RefObject<HTMLInputElement>}
            data-type={type}
            className={inputTextStyles()}
            type="text"
            defaultValue={currentValue ?? undefined}
            value={inputValue}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </div>
      </span>
      {children}
    </div>
  );
}
