
import React, { useState } from 'react';
import "./button.css";

interface ButtonProps {
  title: string;
}

export const CustomButton: React.FC<ButtonProps> = ({ title }) => {

  return (
    <button className='login-singup-button'>
      {title}
    </button>
  );
};
