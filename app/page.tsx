"use client";
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import globalStyles from "./components/Styles/GlobalStyles.module.css";
import { ThemeContext } from "./context/Theme";
import Header from "./components/Header/Header";
import { useRouter } from "next/navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function Home() {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection();
  }, [router]);

  if (!themeContext) {
    console.info("useContext must be used within a ThemeProvider");
    return null;
  }

  const { themeColor } = themeContext;

  const finalPage =
    themeColor === "light"
      ? `${globalStyles.lightTheme} ${globalStyles.lightThemeScrollbar}`
      : `${globalStyles.darkTheme} ${globalStyles.darkThemeScrollbar}`;

  return (
    <main className={styles.main}>
      <div className={styles.headerDiv}>
        <Header />
      </div>
      <div className={`${styles.bodyDiv} ${finalPage}`}>
        <div id="home">
          <LandingPage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}
