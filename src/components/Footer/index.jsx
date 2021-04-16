import React from 'react';
import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p className="text-footer">
      Copyright&copy;  2018-{fullYear} by Quest. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;