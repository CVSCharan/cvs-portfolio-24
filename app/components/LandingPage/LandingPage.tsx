"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import landingPageStyle from "./LandingPage.module.css";
import globalStyles from "../Styles/GlobalStyles.module.css";
import { ThemeContext } from "@/app/context/Theme";
import Image from "next/image";

const LandingPage: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const fullText = ["CVS CHARAN"];
  const typingSpeed = 170; // Speed of typing and deletion
  const delayBeforeDeletion = 3700; // Delay before deletion starts
  const delayBeforeRestart = 2700; // Delay before restart

  const Ref3 = useRef<HTMLHeadingElement | null>(null);
  const Ref4 = useRef<HTMLHeadingElement | null>(null);
  const intervalRef = useRef<number | null>(null);

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

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    console.info("useContext must be used within a ThemeProvider");
    return null;
  }

  const { themeColor } = themeContext;

  const finalHeaderTextSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${landingPageStyle.headerTxtSpan}`
      : `${globalStyles.darkThemeTxtOne} ${landingPageStyle.headerTxtSpan}`;

  const finalHeaderText =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtThree} ${landingPageStyle.headerTxt}`
      : `${globalStyles.darkThemeTxtThree} ${landingPageStyle.headerTxt}`;

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
    </div>
  );
};

export default LandingPage;
