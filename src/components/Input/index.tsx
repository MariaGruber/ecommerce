import { CSSProperties } from "react";
import classnames from 'classnames';
import "./input.css";

interface InputProps {
  title: string;
  type: string;
  placeholder: string;
  value?:string;
  onChange: (value: string) => void;
  style?: CSSProperties;
  error?: boolean;
};
  
const Input: React.FC<InputProps> = ({
  title,
  type,
  placeholder,
  value,
  onChange = () => {},
  style,
  error
}) => {
  const inputClass = classnames('input-form', {
    'error': Boolean(error)
  });
  return (
    <div className="input-container">
      <label htmlFor="value">{title}</label>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        style={style}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
  
export {Input};