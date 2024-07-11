"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import landingPageStyle from "./LandingPage.module.css";
import globalStyles from "../Styles/GlobalStyles.module.css";
import { ThemeContext } from "@/app/context/Theme";
import Image from "next/image";
import SocialMediaIcon from "../SocialMediaIcons/SocilaMediaIcons";
import { motion } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QRCode from "qrcode-generator";
import Axios from "axios";
import FileDownload from "js-file-download";
import { notification } from "antd";

const LandingPage: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const resumeURL = "https://cvs-charan-resume.tiiny.site/";
  const fullText = ["CVS CHARAN"];
  const [qrCodeSVG, setQrCodeSVG] = useState("");
  const typingSpeed = 170; // Speed of typing and deletion
  const delayBeforeDeletion = 3700; // Delay before deletion starts
  const delayBeforeRestart = 2700; // Delay before restart

  const Ref1 = useRef<HTMLHeadingElement | null>(null);
  const Ref2 = useRef<HTMLHeadingElement | null>(null);
  const Ref3 = useRef<HTMLHeadingElement | null>(null);
  const Ref4 = useRef<HTMLHeadingElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const themeContext = useContext(ThemeContext);

  const themeColor = themeContext?.themeColor;

  useEffect(() => {
    const animateCardContentsRight = (
      ref: React.RefObject<HTMLHeadingElement>
    ) => {
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

    const animateCardContentsTop = (
      ref: React.RefObject<HTMLHeadingElement>
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

    animateCardContentsRight(Ref4);
    animateCardContentsTop(Ref3);
    animateCardContentsRight(Ref1);
    animateCardContentsRight(Ref2);
  }, []);

  useEffect(() => {
    const textLoop = async () => {
      for (const text of fullText) {
        await typeText(text);
        await deleteText(text);
      }
      textLoop();
    };

    const typeText = async (text: string) => {
      for (let i = 0; i <= text.length; i++) {
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setTypedText(text.substring(0, i));
            resolve();
          }, typingSpeed)
        );
      }
    };

    const deleteText = async (text: string) => {
      await new Promise<void>((resolve) =>
        setTimeout(resolve, delayBeforeDeletion)
      );
      for (let i = text.length; i >= 0; i--) {
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setTypedText(text.substring(0, i));
            resolve();
          }, typingSpeed)
        );
      }
      await new Promise<void>((resolve) =>
        setTimeout(resolve, delayBeforeRestart)
      );
    };

    textLoop();

    return () => {
      const currentInterval = intervalRef.current;
      if (currentInterval !== null) {
        clearInterval(currentInterval);
      }
    };
  }, []);

  useEffect(() => {
    if (!themeColor) return;

    const qr = QRCode(0, "L");
    qr.addData(resumeURL);
    qr.make();
    const svg = qr.createSvgTag({ cellSize: 3.5 });
    const modifiedSvg =
      themeColor === "dark"
        ? svg.replace("<path", '<path fill="#01d293"')
        : svg.replace("<path", '<path fill="#74bdcb"');
    setQrCodeSVG(modifiedSvg);
  }, [themeColor]);

  const download = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Axios({
      url: "https://my-portfolio-24-server-2cf37196a6ea.herokuapp.com/resume-service",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      console.log(response);
      FileDownload(response.data, "Charan_Resume.pdf");
      notification.success({
        message: "Success",
        description: "Resume Downloaded",
        placement: "bottomRight",
      });
    });
  };

  if (!themeContext) {
    return null;
  }

  const finalHeaderTextSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.headerTextSpan}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.headerTextSpan}`;

  const finalHeaderText =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${landingPageStyle.headerText}`
      : `${globalStyles.darkThemeTxtThree} ${landingPageStyle.headerText}`;

  const finalParaSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.headerOne}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.headerOne}`;

  const finalPara =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${landingPageStyle.paraTxt}`
      : `${globalStyles.darkThemeTxtFour} ${landingPageStyle.paraTxt}`;

  const finalParaImp =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${landingPageStyle.paraTxt}`
      : `${globalStyles.darkThemeTxtThree} ${landingPageStyle.paraTxt}`;

  const finalQr =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.qrDiv}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.qrDiv}`;

  const finalResumeBtn =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.resumeBtn}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.resumeBtn}`;

  const finalStayConnected =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.stayConnected}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.stayConnected}`;

  return (
    <div className={landingPageStyle.mainDiv}>
      <div className={landingPageStyle.sectionOne}>
        <div className={landingPageStyle.sectionOneFirstDiv}>
          <h2 ref={Ref4} className={finalHeaderText}>
            <span className={finalHeaderTextSpan}> - </span>Hello
          </h2>
          <span className={finalParaSpan}>
            {`I'm`} {typedText}{" "}
            <span className={landingPageStyle.homeSpanCursor}>|</span>
          </span>
          <p className={finalPara}>
            Welcome to a{" "}
            <span className={finalParaImp}> {`Web Developer's`}</span> digital
            playground, where creativity meets functionality, and innovation is
            the driving force behind every pixel.
          </p>
          <p className={finalPara}>
            Adept at crafting immersive and dynamic web experiences that
            captivate and engage users using{" "}
            <span className={finalParaImp}>
              React JS, Next JS, Express JS, Bootstrap, Tailwind CSS,{" "}
            </span>
            and more.
          </p>
          <p className={finalPara}>
            Every line of code I write is committed to quality and fueled by
            continuous learning. I turn ideas into captivating realities infused
            with passion and dedication.
          </p>
        </div>
        <div
          style={{
            backgroundImage:
              themeColor === "light"
                ? `url(/assets/Images/light-home-blob.png)`
                : `url(/assets/Images/dark-home-blob.png)`,
          }}
          className={landingPageStyle.sectionOneSecondDiv}
          ref={Ref3}
        >
          <Image
            height={300}
            width={300}
            className={landingPageStyle.profilePic}
            src="/assets/Images/profile-pic.png"
            alt="profile pic"
          />
        </div>
      </div>
      <div className={landingPageStyle.sectionTwo}>
        <div ref={Ref1} className={landingPageStyle.sectionTwoFirstDiv}>
          <div
            ref={Ref1}
            className={finalQr}
            dangerouslySetInnerHTML={{ __html: qrCodeSVG }}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={download}
            className={finalResumeBtn}
          >
            RESUME
            <FileDownloadOutlinedIcon
              className={landingPageStyle.homeResumeDownloadIcon}
            />
          </motion.button>
        </div>
        <div ref={Ref2} className={landingPageStyle.sectionTwoSecondDiv}>
          <h2 className={finalStayConnected}>Stay Connected</h2>
          <div className={landingPageStyle.sectionTwoSecondDivSubFirstDiv}>
            <SocialMediaIcon
              icon="github"
              href="https://github.com/CVSCharan"
            />
            <SocialMediaIcon
              icon="linkedin"
              href="https://www.linkedin.com/in/charan-cvs/"
            />
            <SocialMediaIcon
              icon="whatsapp"
              href="https://wa.me/7337525111?text=Hey CVS!"
            />
            {/* <SocialMediaIcon icon="discord" href="https://discord.gg/cf7fYHa4" /> */}
            {/* <SocialMediaIcon icon="youtube" href="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
