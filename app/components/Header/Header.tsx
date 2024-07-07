import { ThemeContext } from "@/app/context/Theme";
import React, { useContext } from "react";
import globalStyles from "../Styles/GlobalStyles.module.css";
import headerStyles from "./Header.module.css";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    console.info("useContext must be used within a ThemeProvider");
    return null;
  }

  const { themeColor, handleThemeColor } = themeContext;

  const finalHeader =
    themeColor === "light"
      ? `${headerStyles.headerMainDiv} ${globalStyles.lightTheme}`
      : `${headerStyles.headerMainDiv} ${globalStyles.darkTheme}`;

  const finalHeaderText =
    themeColor === "light"
      ? `${headerStyles.headerLogo} ${globalStyles.lightThemeTxt}`
      : `${headerStyles.headerLogo} ${globalStyles.darkThemeTxt}`;

  const finalHeaderTextSpan =
    themeColor === "light"
      ? `${headerStyles.headerLogoSpan} ${globalStyles.lightThemeTxtOne}`
      : `${headerStyles.headerLogoSpan} ${globalStyles.darkThemeTxtOne}`;

  const finalHeaderAnchorText =
    themeColor === "light"
      ? `${headerStyles.headerMenuItems} ${globalStyles.lightThemeTxtTwo}`
      : `${headerStyles.headerMenuItems} ${globalStyles.darkThemeTxtTwo}`;

  const finalHeaderAnchorTextDivider =
    themeColor === "light"
      ? `${headerStyles.headerMenuItems} ${globalStyles.lightThemeTxtOne}`
      : `${headerStyles.headerMenuItems} ${globalStyles.darkThemeTxtOne}`;

  const finalHeaderIcon =
    themeColor === "light"
      ? `${headerStyles.headerMenuItemsIcons} ${globalStyles.lightThemeTxtTwo}`
      : `${headerStyles.headerMenuItemsIcons} ${globalStyles.darkThemeTxtTwo}`;

  const finalHeaderThemeIcon =
    themeColor === "dark"
      ? `/assets/Images/brightness-white-icon.png`
      : `/assets/Images/brightness-dark-icon.png`;

  const handleThemeChange = () => {
    if (themeColor === "light") {
      handleThemeColor("dark");
    } else {
      handleThemeColor("light");
    }
  };

  return (
    <>
      <div className={finalHeader}>
        <div className={headerStyles.headerFirstDiv}>
          <h2 className={finalHeaderText}>
            <span className={finalHeaderTextSpan}>C</span>vs{" "}
            <span className={finalHeaderTextSpan}>C</span>haran
          </h2>
        </div>
        <div className={headerStyles.headerSecondDiv}>
          <div className={headerStyles.headerSecondDivContentOne}>
            <a className={finalHeaderAnchorText} href="#home">
              Home
            </a>
            <a className={finalHeaderAnchorText} href="#projects">
              Projects
            </a>
            <a className={finalHeaderAnchorText} href="#about">
              About
            </a>
            <a className={finalHeaderAnchorText} href="#contact">
              Contact
            </a>
          </div>
          <div className={headerStyles.headerSecondDivContentTwo}>
            <a className="header-icon" href="#home">
              <HomeIcon className={finalHeaderIcon} />
            </a>
            <a className="header-icon" href="#projects">
              <LayersIcon className={finalHeaderIcon} />
            </a>
            <a className="header-icon" href="#about">
              <PersonIcon className={finalHeaderIcon} />
            </a>
            <a className="header-icon" href="#contact">
              <ContactPageIcon className={finalHeaderIcon} />
            </a>
          </div>
          <h2 className={finalHeaderAnchorTextDivider}> | </h2>
          <div onClick={handleThemeChange}>
            <Image
              className={headerStyles.headerIcon}
              src={finalHeaderThemeIcon}
              alt="themeIcon"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
