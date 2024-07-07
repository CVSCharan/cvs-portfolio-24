import React, { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { DiscordOutlined } from "@ant-design/icons";
import { ThemeContext } from "@/app/context/Theme";
import globalStyles from "../Styles/GlobalStyles.module.css";

interface SocialMediaIconProps {
  icon: "github" | "linkedin" | "youtube" | "whatsapp" | "discord";
  href?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, href }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    console.info("useContext must be used within a ThemeProvider");
    return null;
  }

  const { themeColor } = themeContext;

  const finalHomeIcon =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${globalStyles.socialMediaIcon}`
      : `${globalStyles.darkThemeTxtTwo} ${globalStyles.socialMediaIcon}`;

  const renderIcon = () => {
    switch (icon) {
      case "github":
        return <GitHubIcon className={finalHomeIcon} />;
      case "linkedin":
        return <LinkedInIcon className={finalHomeIcon} />;
      case "youtube":
        return <YouTubeIcon className={finalHomeIcon} />;
      case "whatsapp":
        return <WhatsAppIcon className={finalHomeIcon} />;
      case "discord":
        return <DiscordOutlined className={finalHomeIcon} />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div
      style={{
        pointerEvents: href ? "auto" : "none",
        cursor: href ? "pointer" : "default",
      }}
      onClick={handleClick}
    >
      {renderIcon()}
    </div>
  );
};

export default SocialMediaIcon;
