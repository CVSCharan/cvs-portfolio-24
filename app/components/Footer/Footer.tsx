"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/Theme";
import globalStyles from "../Styles/GlobalStyles.module.css";
import footerStyles from "./Footer.module.css";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  const themeContext = useContext(ThemeContext);

  const themeColor = themeContext?.themeColor;

  if (!themeContext) {
    return null;
  }

  const finalFooterDiv =
    themeColor === "light"
      ? `${globalStyles.lightTheme} ${footerStyles.footer}`
      : `${globalStyles.darkTheme} ${footerStyles.footer}`;

  const finalFooterTxt =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${footerStyles.footerTxt}`
      : `${globalStyles.darkThemeTxtOne} ${footerStyles.footerTxt}`;

  return (
    <div className={finalFooterDiv}>
      <p className={finalFooterTxt}>
        &copy; Copyright {year} - Developed by CVS CHARAN. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
