import "./input.css";

interface InputProps {
    title: string;
    type: string;
  }
  
const Input: React.FC<InputProps> = ({ title, type }) => {
    return (
      <div className="input-container">
        <label htmlFor="value">{title}</label>
        <input className="input-form" type={type} />
      </div>
    );
  };
  
export {Input};