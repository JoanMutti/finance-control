import React from "react";
import { useEffect, useRef } from "react";

const OptionsInput = ({ title, handleChange, options, needRestart }) => {
  const selectInput = useRef(null);

  useEffect(() => {
    if (needRestart) {
      selectInput.current.value = options[0];
    }
  }, [options, needRestart]);

  return (
    <select ref={selectInput} name={title} id={title} onChange={handleChange} style={{ textTransform: "capitalize", margin: "12px 0px" }}>
      {options.map((item) => (
        <option key={`option-${item}`} value={item} style={{ textTransform: "capitalize" }}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default OptionsInput;
