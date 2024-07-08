import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/app/context/Theme";
import { certificatesData, orgData, univData } from "./AboutFun";
import CircleIcon from "@mui/icons-material/Circle";
import LinkIcon from "@mui/icons-material/Link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import globalStyles from "../Styles/GlobalStyles.module.css";
import aboutStyles from "./About.module.css";

interface CertificateData {
  key: string;
  certificate_name: string;
  issues_on: string;
  credential_id: string;
  institution: string;
  institution_logo: string;
  certificate_link: string;
  certificate_img: string;
}

interface UniversityData {
  key: string;
  institute: string;
  course_duration: string;
  institution_logo: string;
  degree: string;
  grade: string;
  description: string;
}

interface OrganizationData {
  key: string;
  organization: string;
  role: string;
  joined_on: string;
  location: string;
  role_type: string;
  logo_src: string;
  description: string;
}

const About: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const themeColor = themeContext?.themeColor;
  const [subHeader, setSubHeader] = useState<string>("exp");
  const Ref1 = useRef<HTMLDivElement>(null);
  const Ref2 = useRef<HTMLDivElement>(null);
  const Ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCardContentsRight = (ref: React.RefObject<HTMLDivElement>) => {
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

    const animateCardContentsTop = (ref: React.RefObject<HTMLDivElement>) => {
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

    const animateCardContentsBottom = (
      ref: React.RefObject<HTMLDivElement>
    ) => {
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

    animateCardContentsTop(Ref1);
    animateCardContentsBottom(Ref2);
    animateCardContentsRight(Ref3);
  }, [subHeader]);

  const finalAboutHeaderText2 =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutHeaderTextTwo}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutHeaderTextTwo}`;
  const finalAboutHeaderTextSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutHeaderTextTwo}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutHeaderTextTwo}`;
  const finalAboutExpRole =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutExpRole}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutExpRole}`;
  const finalAboutEduOrg =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutEduOrg}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutEduOrg}`;
  const finalAboutCertName =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutCertName}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutCertName}`;
  const finalAboutExpOrg =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutExpOrg}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutExpOrg}`;
  const finalAboutCertInst =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutCertInstitution}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutCertInstitution}`;
  const finalAboutEduDegree =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutEduDegree}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutEduDegree}`;
  const finalAboutExpJoinedOn =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutEduDegree}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutEduDegree}`;
  const finalAboutExpDesc =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutExpJoinedOn}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutExpJoinedOn}`;
  const finalAboutEduDesc =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${aboutStyles.aboutExpDesc}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutExpDesc}`;
  const finalAboutEduDuration =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${aboutStyles.aboutEduDuration}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutEduDuration}`;
  const finalAboutCertIssued =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutEduDuration}`
      : `${globalStyles.darkThemeTxtThree} ${aboutStyles.aboutEduDuration}`;
  const finalAboutExpLoc =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutCertIssuedOn}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutCertIssuedOn}`;
  const finalAboutEduGrade =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${aboutStyles.aboutEduGrade}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutEduGrade}`;
  const finalAboutCertCred =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${aboutStyles.aboutCertCred}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutCertCred}`;
  const finalAboutExpContainer =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutExperienceCardsSubContainer}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutExperienceCardsSubContainer}`;
  const finalAboutEduContainer =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutEducationCardsSubContainer}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutEducationCardsSubContainer}`;
  const finalAboutCertContainer =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutCertificatesCardsSubContainer}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutCertificatesCardsSubContainer}`;
  const finalPaginationDotsActive =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutCertificatesPaginationIconActive}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutCertificatesPaginationIconActive}`;
  const finalPaginationDots =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${aboutStyles.aboutCertificatesPaginationIcon}`
      : `${globalStyles.darkThemeTxtFour} ${aboutStyles.aboutCertificatesPaginationIcon}`;
  const finalAboutCertCredContainer =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutCertCredContainer}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutCertCredContainer}`;
  const finalCertLink =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutCertificateLinkIcon}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutCertificateLinkIcon}`;
  const finalAboutSubHeader =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${aboutStyles.aboutSubHeaderItems}`
      : `${globalStyles.darkThemeTxtTwo} ${aboutStyles.aboutSubHeaderItems}`;
  const finalAboutSubHeaderCont =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${aboutStyles.aboutSubHeader}`
      : `${globalStyles.darkThemeTxtOne} ${aboutStyles.aboutSubHeader}`;

  const handleSubHeader = (subHeaderVal: string) => {
    setSubHeader(subHeaderVal);
  };

  const handleClick = (href: string) => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  interface AutoplayTextCardsProps {
    data: CertificateData[];
    interval: number;
  }

  const AutoplayTextCards: React.FC<AutoplayTextCardsProps> = ({
    data,
    interval,
  }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, interval);

      return () => clearInterval(timer);
    }, [data, interval]);

    const handlePaginationClick = (index: number) => {
      setCurrentIndex(index);
    };

    return (
      <div className={aboutStyles.aboutCertificatesMainContainer}>
        {data.map((item: CertificateData, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
              width: "75%",
              height: "100%",
            }}
          >
            <div
              className={finalAboutCertContainer}
              style={{
                backgroundImage: `url(/assets/Images/card-4.svg)`,
              }}
            >
              <div
                className={
                  aboutStyles.aboutCertificatesCardsSubContainerContentOne
                }
              >
                <Image
                  height={300}
                  width={300}
                  className={aboutStyles.aboutCertificateImg}
                  src={item.certificate_img}
                  alt="certificates card img"
                />
              </div>
              <div
                className={
                  aboutStyles.aboutCertificatesCardsSubContainerContentTwo
                }
              >
                <h2 className={finalAboutCertName}>{item.certificate_name}</h2>
                <Image
                  height={300}
                  width={300}
                  className={aboutStyles.aboutCertificateIcon}
                  src={item.institution_logo}
                  alt="certificates card"
                />
                <p className={finalAboutCertInst}>{item.institution}</p>
                <p className={finalAboutCertIssued}>
                  Issued - {item.issues_on}
                </p>
                <div className={aboutStyles.aboutCertCredMainContainer}>
                  <p className={finalAboutCertCred}>
                    Credential ID - {item.credential_id}
                  </p>
                  <div
                    onClick={() => handleClick(item.certificate_link)}
                    className={finalAboutCertCredContainer}
                  >
                    <p className={finalAboutCertCred}>Link</p>
                    <LinkIcon className={finalCertLink} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={aboutStyles.aboutCertificatesPagination}>
          {data.map((_, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className={`${aboutStyles.paginationBtn} ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handlePaginationClick(index)}
            >
              {index === currentIndex ? (
                <CircleIcon className={finalPaginationDotsActive} />
              ) : (
                <CircleIcon className={finalPaginationDots} />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className={aboutStyles.aboutSubContainerOne}>
        <h2 className={finalAboutHeaderText2}>
          <span className={finalAboutHeaderTextSpan}> ~ </span>who i am
          <span className={finalAboutHeaderTextSpan}> ~ </span>
        </h2>
      </div>
    );
  };

  const renderSubHeader = () => {
    return (
      <div className={aboutStyles.aboutSubHeaderMain}>
        <div ref={Ref1} className={finalAboutSubHeaderCont}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={finalAboutSubHeader}
            onClick={() => handleSubHeader("exp")}
          >
            Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={finalAboutSubHeader}
            onClick={() => handleSubHeader("edu")}
          >
            Education
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={finalAboutSubHeader}
            onClick={() => handleSubHeader("cert")}
          >
            Certificates
          </motion.button>
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    return (
      <AnimatePresence mode="wait">
        {orgData.map((org: OrganizationData, index: number) => (
          <motion.div
            initial={{
              x: index % 2 === 0 ? 15 : -15,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.5 }}
            style={{ backgroundImage: `url(/assets/Images/card-1.svg)` }}
            className={finalAboutExpContainer}
            key={index}
          >
            <div
              className={aboutStyles.aboutExperienceCardsSubContainerContents}
            >
              <div
                className={
                  aboutStyles.aboutExperienceCardsSubContainerContentOne
                }
              >
                <Image
                  height={300}
                  width={300}
                  className={aboutStyles.aboutExperienceIcon}
                  src={org.logo_src}
                  alt="org card"
                />
              </div>
              <div
                className={
                  aboutStyles.aboutExperienceCardsSubContainerContentTwo
                }
              >
                <h2 className={finalAboutExpRole}>{org.role}</h2>
                <p className={finalAboutExpOrg}>{org.organization}</p>
                <p className={finalAboutExpJoinedOn}>{org.role_type}</p>
                <p className={finalAboutExpJoinedOn}>{org.joined_on}</p>
                <p className={finalAboutExpLoc}>{org.location}</p>
              </div>
            </div>
            <h2 className={finalAboutExpDesc}>{org.description}</h2>
          </motion.div>
        ))}
      </AnimatePresence>
    );
  };

  const renderEducation = () => {
    return (
      <div className={aboutStyles.aboutEducationCardsContainer}>
        <AnimatePresence mode="wait">
          {univData.map((item, itemInd) => (
            <motion.div
              initial={{
                x: itemInd % 2 === 0 ? 15 : -15,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: itemInd * 0.5 }}
              style={{
                backgroundImage: `url(/assets/Images/card-3.svg)`,
              }}
              className={finalAboutEduContainer}
              key={itemInd}
            >
              <div className={aboutStyles.aboutEducationCardsSubMain}>
                <div
                  className={
                    aboutStyles.aboutEducationCardsSubContainerContentOne
                  }
                >
                  <Image
                    height={300}
                    width={300}
                    className={aboutStyles.aboutEducationIcon}
                    src={item.institution_logo}
                    alt="org card"
                  />
                </div>
                <div
                  className={
                    aboutStyles.aboutEducationCardsSubContainerContentTwo
                  }
                >
                  <h2 className={finalAboutEduOrg}>{item.institute}</h2>
                  <p className={finalAboutEduDegree}>{item.degree}</p>
                  <p className={finalAboutEduDuration}>
                    {item.course_duration}
                  </p>
                  <p className={finalAboutEduGrade}>{item.grade}</p>
                </div>
              </div>
              <p className={finalAboutEduDesc}>{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };

  const renderCertificates = () => {
    return (
      <AutoplayTextCards
        data={certificatesData}
        interval={3000} // 3 seconds interval
      />
    );
  };

  return (
    <div className={aboutStyles.mainDiv}>
      <div className={aboutStyles.aboutMainContainer}>
        {renderHeader()}
        {renderSubHeader()}
        {subHeader === "exp" && (
          <div className={aboutStyles.aboutSubContainerTwo}>
            <div className={aboutStyles.aboutExperienceCardsContainer}>
              {renderExperience()}
            </div>
          </div>
        )}
        {subHeader === "edu" && (
          <div className={aboutStyles.aboutSubContainerThree}>
            {renderEducation()}
          </div>
        )}
        {subHeader === "cert" && (
          <div className={aboutStyles.aboutSubContainerFour}>
            {renderCertificates()}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
