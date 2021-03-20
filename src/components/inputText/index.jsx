import React from "react";
import "./inputText.scss";

export default function inputText({
  label,
  value,
  onChange,
  onClick,
  grey,
  rounded,
  placeholder,
  type = "text",
  name,
  google,
  disabled,
}) {
  return (
    <label className="d-block inputText">
      <p>{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        name={name}
        className={`input 
                    ${grey ? "grey" : ""} 
                    ${rounded ? "rounded" : ""} 
                    ${type === "textArea" ? "textArea" : ""}
                    ${type === "submit" ? "submit" : ""}
                    ${google ? "google" : ""}
                    ${disabled ? "disabled" : ""}
                `}
      />
    </label>
  );
}
