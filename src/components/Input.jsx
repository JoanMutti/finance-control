import React, { useRef, useState } from "react";
import "../styles/Input.css";

const Input = ({ value, handleChange, type, placeholder, title, maxLenght, ...props }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = (action) => {
    action === "in" ? setInputFocus(true) : setInputFocus(false);
  };

  const handleClickLabel = () => {
    handleFocus("in");
    inputRef.current.focus();
  };

  return (
    <div className="Input">
      <label htmlFor={title} className={`Input-label ${inputFocus || value !== "" ? "focus" : null}`} onClick={handleClickLabel}>
        {!inputFocus && value === "" ? placeholder : title}
      </label>
      <input
        {...props}
        ref={inputRef}
        type={type}
        value={value}
        onChange={() => handleChange(inputRef.current.value)}
        // placeholder={placeholder}
        name={title}
        onFocus={() => handleFocus("in")}
        onBlur={() => handleFocus("out")}
        maxLength={maxLenght ?? null}
      />
    </div>
  );
};

export default Input;
