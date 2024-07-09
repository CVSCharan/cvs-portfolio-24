import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ThemeContext } from "@/app/context/Theme";
import { motion, AnimatePresence } from "framer-motion";
import globalStyles from "../Styles/GlobalStyles.module.css";
import skillsAndProjectsStyles from "./Projects.module.css";
import Image from "next/image";
import { miniProjects } from "./ProjectsFun";

export default function Projects() {
  const themeContext = useContext(ThemeContext);

  const themeColor = themeContext?.themeColor;
  const [counter, setCounter] = useState(1);
  const [selectedHeader, setSelectedHeader] = useState("skills");

  const Ref1 = useRef<HTMLDivElement>(null);
  const Ref2 = useRef<HTMLDivElement>(null);
  const Ref3 = useRef<HTMLDivElement>(null);
  const Ref4 = useRef<HTMLDivElement>(null);

  interface MiniProject {
    id: string;
    title: string;
    source: string;
  }

  useEffect(() => {
    const animateCardContentsBottom = (ref: React.RefObject<HTMLElement>) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(40px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    const animateCardContentsTop = (ref: React.RefObject<HTMLElement>) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(-40px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    animateCardContentsBottom(Ref1);
    animateCardContentsTop(Ref4);
  }, [location, selectedHeader]);

  const skillsHeaderList = [
    { id: "frontend", title: "Frontend" },
    { id: "backend", title: "Backend" },
    { id: "tools", title: "Tools" },
    { id: "others", title: "Others" },
  ];

  const frontEndSkillsList = useMemo(
    () => [
      { id: "html", title: "HTML", imgSrc: `/assets/Images/html-5-color.png` },
      { id: "css", title: "CSS", imgSrc: `/assets/Images/css-3-color.png` },
      { id: "js", title: "JavaScript", imgSrc: `/assets/Images/js-color.png` },
      {
        id: "ts",
        title: "TypeScript",
        imgSrc: `/assets/Images/typeScriptIcon.png`,
      },
      {
        id: "bootstrap",
        title: "Bootstrap",
        imgSrc: `/assets/Images/bootstrap-color.png`,
      },
      {
        id: "tailwind",
        title: "Tailwind",
        imgSrc: `/assets/Images/tailwindcss.png`,
      },
      {
        id: "react",
        title: "React JS",
        imgSrc: `/assets/Images/react-color.png`,
      },
      {
        id: "reactNative",
        title: "React Native",
        imgSrc: `/assets/Images/react-native-black.png`,
      },
      {
        id: "reactRedux",
        title: "React Redux",
        imgSrc: `/assets/Images/redux-icon.png`,
      },
    ],
    []
  );

  const backEndSkillsList = useMemo(
    () => [
      {
        id: "nodeJS",
        title: "Node JS",
        imgSrc: `/assets/Images/nodeJsIcon.png`,
      },
      {
        id: "expressJS",
        title: "Express JS",
        imgSrc: `/assets/Images/node-js-color.png`,
      },
      {
        id: "postgresql",
        title: "PostgreSQL",
        imgSrc: `/assets/Images/postgre-color.png`,
      },
      {
        id: "sqlite",
        title: "SQLite",
        imgSrc: `/assets/Images/sqLite.png`,
      },
    ],
    []
  );

  const toolsSkillsList = useMemo(
    () => [
      { id: "git", title: "Git", imgSrc: `/assets/Images/git-black.png` },
      {
        id: "github",
        title: "GitHub",
        imgSrc: `/assets/Images/git-hub-black.png`,
      },
      {
        id: "netlify",
        title: "Netlify",
        imgSrc: `/assets/Images/netlifyIcon.png`,
      },
      {
        id: "heroku",
        title: "Heroku",
        imgSrc: `/assets/Images/heroku-color.png`,
      },
      {
        id: "firebase",
        title: "Firebase",
        imgSrc: `/assets/Images/googlefirebase.png`,
      },
      {
        id: "vscode",
        title: "VS Code",
        imgSrc: `/assets/Images/vsCodeIcon.png`,
      },
      { id: "unity", title: "Unity", imgSrc: `/assets/Images/unity-black.png` },
    ],
    []
  );

  const othersSkillsList = useMemo(
    () => [
      {
        id: "powerBI",
        title: "Power BI",
        imgSrc: `/assets/Images/powerBiIcon.png`,
      },
      {
        id: "powerAutomate",
        title: "Power Automate",
        imgSrc: `/assets/Images/powerAutomateIcon.png`,
      },
      {
        id: "powerApps",
        title: "Power Apps",
        imgSrc: `/assets/Images/powerAppsIcon.png`,
      },
      {
        id: "python",
        title: "Python",
        imgSrc: `/assets/Images/python-color.png`,
      },
      { id: "c++", title: "C++", imgSrc: `/assets/Images/OOPS-color.png` },
      {
        id: "azureCloud",
        title: "Azure Cloud",
        imgSrc: `/assets/Images/azurecloudservices.png`,
      },
      {
        id: "databricks",
        title: "Databricks",
        imgSrc: `/assets/Images/databricks.png`,
      },
    ],
    []
  );

  const [selectedSkillsHeader, setSelectedSkillsHeader] = useState(
    skillsHeaderList[0].id
  );
  const [selectedSkillsHeaderList, setSelectedSkillsHeaderList] =
    useState(frontEndSkillsList);

  useEffect(() => {
    if (selectedSkillsHeader === "frontend") {
      setSelectedSkillsHeaderList(frontEndSkillsList);
    } else if (selectedSkillsHeader === "backend") {
      setSelectedSkillsHeaderList(backEndSkillsList);
    } else if (selectedSkillsHeader === "tools") {
      setSelectedSkillsHeaderList(toolsSkillsList);
    } else if (selectedSkillsHeader === "others") {
      setSelectedSkillsHeaderList(othersSkillsList);
    }
  }, [
    selectedSkillsHeader,
    frontEndSkillsList,
    backEndSkillsList,
    toolsSkillsList,
    othersSkillsList,
  ]);

  useEffect(() => {
    const animateCardContentsRight = (ref: React.RefObject<HTMLElement>) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateX(-30px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    const animateCardContentsLeft = (ref: React.RefObject<HTMLElement>) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateX(30px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    };

    animateCardContentsLeft(Ref3);
    animateCardContentsRight(Ref2);
  }, [selectedSkillsHeaderList]);

  const handleSkillsActiveHeader = (val: string) => {
    setCounter(counter + 1);
    setSelectedSkillsHeader(val);
  };

  const handleHeaderClick = (headerVal: string) => {
    setSelectedHeader(headerVal);
  };

  const handleClick = (href: string) => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  const finalProjectsHeaderText =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${skillsAndProjectsStyles.projectsHeaderTxt}`
      : `${globalStyles.darkThemeTxtThree} ${skillsAndProjectsStyles.projectsHeaderTxt}`;
  const finalProjectsHeaderTextSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${skillsAndProjectsStyles.projectsHeaderTxtSpan}`
      : `${globalStyles.darkThemeTxtOne} ${skillsAndProjectsStyles.projectsHeaderTxtSpan}`;
  const finalProjectsSubContainerContain =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubContainerSubContainerOne}`
      : `${globalStyles.darkThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubContainerSubContainerOne}`;
  const finalSkillsHeaderList =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainer}`
      : `${globalStyles.darkThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainer}`;
  const finalSkillsHeaderListItem =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainerItems}`
      : `${globalStyles.darkThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainerItems}`;
  const finalSkillsList =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsContainer}`
      : `${globalStyles.darkThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsContainer}`;
  const finalSubHeaderCont =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${skillsAndProjectsStyles.projectsSubHeader}`
      : `${globalStyles.darkThemeTxtFour} ${skillsAndProjectsStyles.projectsSubHeader}`;
  const finalSubHeaderItems =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubHeaderItems}`
      : `${globalStyles.darkThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubHeaderItems}`;
  const finalSkillsSubContainerCont2 =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${skillsAndProjectsStyles.projectsSubContainerSubContainerTwo}`
      : `${globalStyles.darkThemeTxtFour} ${skillsAndProjectsStyles.projectsSubContainerSubContainerTwo}`;
  const finalSkillsHeaderListItems =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainerItems}`
      : `${globalStyles.darkThemeTxtTwo} ${skillsAndProjectsStyles.projectsSkillsHeaderListContainerItems}`;
  const finalSkillsListContainer =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsListContainer}`
      : `${globalStyles.darkThemeTxtOne} ${skillsAndProjectsStyles.projectsSkillsListContainer}`;
  const finalSkillsListContainerTxt =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${skillsAndProjectsStyles.projectsSkillsListContainerTxt}`
      : `${globalStyles.darkThemeTxtThree} ${skillsAndProjectsStyles.projectsSkillsListContainerTxt}`;
  const finalProjectsHeadings =
    themeColor === "light"
      ? `${globalStyles.darkThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubContainerThreeSubContainerOneMainHeading}`
      : `${globalStyles.darkThemeTxtTwo} ${skillsAndProjectsStyles.projectsSubContainerThreeSubContainerOneMainHeading}`;

  return (
    <div
      className={`${skillsAndProjectsStyles.projectsMainDiv} ${
        themeColor === "light"
          ? `${globalStyles.lightTheme}`
          : `${globalStyles.darkTheme}`
      }`}
    >
      <div className={skillsAndProjectsStyles.projectsMainContainer}>
        <div className={skillsAndProjectsStyles.projectsSubContainerOne}>
          <h2 className={finalProjectsHeaderText}>
            <span className={finalProjectsHeaderTextSpan}>S</span>kills &{" "}
            <span className={finalProjectsHeaderTextSpan}>P</span>
            rojects
          </h2>
        </div>
        <div className={skillsAndProjectsStyles.projectsSubHeaderMain}>
          <div ref={Ref4} className={finalSubHeaderCont}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleHeaderClick("skills")}
              className={finalSubHeaderItems}
            >
              Skills
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleHeaderClick("projects")}
              className={finalSubHeaderItems}
            >
              Mini-Projects
            </motion.div>
          </div>
        </div>
        {selectedHeader === "skills" ? (
          <div className={skillsAndProjectsStyles.projectsSubContainerTwo}>
            <div
              className={
                skillsAndProjectsStyles.projectsSubContainerMainContainer
              }
            >
              <div ref={Ref1} className={finalProjectsSubContainerContain}>
                {skillsHeaderList.map((headerItem, headerItemInd) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSkillsActiveHeader(headerItem.id)}
                    className={finalSkillsHeaderList}
                    key={headerItemInd}
                  >
                    <h2 className={finalSkillsHeaderListItems}>
                      {headerItem.title}
                    </h2>
                  </motion.div>
                ))}
              </div>
              <div
                ref={counter % 2 === 0 ? Ref2 : Ref3}
                className={finalSkillsSubContainerCont2}
              >
                <AnimatePresence mode="wait">
                  {selectedSkillsHeaderList.map((listItem, listItemInd) => (
                    <motion.div
                      initial={{
                        x: listItemInd % 2 === 0 ? 15 : -15,
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: listItemInd * 0.3 }}
                      className={finalSkillsListContainer}
                      key={listItemInd}
                    >
                      <Image
                        height={300}
                        width={300}
                        className={
                          skillsAndProjectsStyles.projectsSkillsListIcon
                        }
                        src={listItem.imgSrc}
                        alt="skills list icon"
                      />
                      <h2 className={finalSkillsListContainerTxt}>
                        {listItem.title}
                      </h2>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : null}

        {selectedHeader === "projects" ? (
          <div className={skillsAndProjectsStyles.projectsSubContainerThree}>
            <div
              className={
                skillsAndProjectsStyles.projectsSubContainerThreeSubContainerMain
              }
            >
              <div
                className={
                  skillsAndProjectsStyles.projectsSubContainerThreeSubContainerOne
                }
              >
                {miniProjects.map((item: MiniProject, index) => (
                  <div
                    key={index}
                    className={
                      skillsAndProjectsStyles.projectsSubContainerThreeSubContainerOneMain
                    }
                    onClick={() => handleClick(item.source)}
                  >
                    <h2 className={finalProjectsHeadings}>{item.title}</h2>
                    <iframe
                      src={item.source}
                      title="Quiz App"
                      className={skillsAndProjectsStyles.iframe}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
