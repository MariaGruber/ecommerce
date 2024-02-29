
import React, { useState } from 'react';
import "./button.css";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({ title, onClick }) => {

  return (
    <button className='login-singup-button' onClick={onClick}>
      {title}
    </button>
  );
};
