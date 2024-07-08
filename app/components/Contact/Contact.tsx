import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { notification } from "antd";
import { ThemeContext } from "@/app/context/Theme";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import emailjs from "emailjs-com";
import globalStyles from "../Styles/GlobalStyles.module.css";
import contactStyles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const finalContactCardContentsRef1 = useRef<HTMLDivElement>(null);
  const finalContactCardContentsRef2 = useRef<HTMLDivElement>(null);

  const themeContext = useContext(ThemeContext);
  const themeColor = themeContext?.themeColor;

  const animateCardContents = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => {
      const cardContents = ref.current;
      if (cardContents) {
        cardContents.animate(
          [
            { transform: "translateY(-30px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 },
          ],
          {
            duration: 750,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    },
    []
  );

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCardContents(finalContactCardContentsRef1);
          animateCardContents(finalContactCardContentsRef2);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (finalContactCardContentsRef1.current) {
      observer.observe(finalContactCardContentsRef1.current);
    }
    if (finalContactCardContentsRef2.current) {
      observer.observe(finalContactCardContentsRef2.current);
    }

    return () => {
      if (finalContactCardContentsRef1.current) {
        observer.unobserve(finalContactCardContentsRef1.current);
      }
      if (finalContactCardContentsRef2.current) {
        observer.unobserve(finalContactCardContentsRef2.current);
      }
    };
  }, [animateCardContents]);

  if (!themeContext) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !email || !subject || !message) {
      setFormSubmitted(true);
    } else {
      emailjs
        .sendForm(
          "service_n2w8a5c",
          "template_t4a4rtm",
          e.target as HTMLFormElement,
          "u8bVfJlgy9QJKeMhz"
        )
        .then(
          () => {
            notification.success({
              message: "Success",
              description: "E-Mail successfully sent!",
            });
            setFormSubmitted(false);
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          () => {
            notification.error({
              message: "Error",
              description: "Something went wrong..!!",
            });
          }
        );
    }
  };

  const finalContactMeHeaderText =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${contactStyles.contactMeHeaderTxt}`
      : `${globalStyles.darkThemeTxtTwo} ${contactStyles.contactMeHeaderTxt}`;
  const finalContactMeHeaderTextSpan =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${contactStyles.contactMeHeaderTxtSpan}`
      : `${globalStyles.darkThemeTxtOne} ${contactStyles.contactMeHeaderTxtSpan}`;
  const finalContactMeSubHeading =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTwo} ${contactStyles.contactMeSubHeading}`
      : `${globalStyles.darkThemeTxtTwo} ${contactStyles.contactMeSubHeading}`;
  const finalContactMeInput =
    themeColor === "light"
      ? `${globalStyles.lightThemeInput} ${contactStyles.contactMeInput}`
      : `${globalStyles.darkThemeInput} ${contactStyles.contactMeInput}`;
  const finalContactMeBtn =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${contactStyles.contactMeBtn}`
      : `${globalStyles.darkThemeTxtOne} ${contactStyles.contactMeBtn}`;
  const finalContactCardContents =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${contactStyles.contactSubContainerOneCardContents}`
      : `${globalStyles.darkThemeTxtOne} ${contactStyles.contactSubContainerOneCardContents}`;
  const finalContactCardContentsTxt1 =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtOne} ${contactStyles.contactSubContainerOneCardContentsTxtOne}`
      : `${globalStyles.darkThemeTxtOne} ${contactStyles.contactSubContainerOneCardContentsTxtOne}`;
  const finalContactCardContentsTxt2 =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtTree} ${contactStyles.contactSubContainerOneCardContentsTxtTwo}`
      : `${globalStyles.darkThemeTxtThree} ${contactStyles.contactSubContainerOneCardContentsTxtTwo}`;
  const finalContactIcons =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${contactStyles.icons}`
      : `${globalStyles.darkThemeTxtFour} ${contactStyles.icons}`;
  const finalContactLabel =
    themeColor === "light"
      ? `${globalStyles.lightThemeTxtFour} ${contactStyles.contactLabels}`
      : `${globalStyles.darkThemeTxtFour} ${contactStyles.contactLabels}`;

  return (
    <div id="contact" className={contactStyles.mainDiv}>
      <div className={contactStyles.mainContainer}>
        <div className={contactStyles.subContainerOne}>
          <div className={contactStyles.contactSubContainerOneCard}>
            <div
              ref={finalContactCardContentsRef1}
              className={finalContactCardContents}
              style={{ backgroundImage: `url(/assets/Images/card-5.svg)` }}
            >
              <PhoneOutlinedIcon className={finalContactIcons} />
              <h2 className={finalContactCardContentsTxt1}>Mobile</h2>
              <h2 className={finalContactCardContentsTxt2}>+91 7337525111</h2>
            </div>
            <div
              ref={finalContactCardContentsRef2}
              className={finalContactCardContents}
              style={{ backgroundImage: `url(/assets/Images/card-5.svg)` }}
            >
              <LocationOnOutlinedIcon className={finalContactIcons} />
              <h2 className={finalContactCardContentsTxt1}>Location</h2>
              <h2 className={finalContactCardContentsTxt2}>
                HYD - 500084, IND 🇮🇳
              </h2>
              <h2 className={finalContactCardContentsTxt2}>Planet EARTH 🌍</h2>
            </div>
          </div>
        </div>
        <div className={contactStyles.subContainerTwo}>
          <div className={contactStyles.contactMeContainer}>
            <div className={contactStyles.contactMeHeaderContainer}>
              <h2 className={finalContactMeHeaderText}>
                <span className={finalContactMeHeaderTextSpan}> - </span>
                Contact Me
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className={contactStyles.contactMeContainerOne}
            >
              <div className={contactStyles.contactMeContainerOneContents}>
                <label htmlFor="full_name" className={finalContactLabel}>
                  Full Name
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  className={finalContactMeInput}
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                {formSubmitted && !fullName && (
                  <span className="tooltip">Full Name is required</span>
                )}
              </div>
              <div className={contactStyles.contactMeContainerOneContents}>
                <label htmlFor="email_id" className={finalContactLabel}>
                  Email
                </label>
                <input
                  id="email_id"
                  name="email_id"
                  className={finalContactMeInput}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {formSubmitted && !email && (
                  <span className="tooltip">Email is required</span>
                )}
              </div>
              <div className={contactStyles.contactMeContainerOneContents}>
                <label htmlFor="subject" className={finalContactLabel}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className={finalContactMeInput}
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                {formSubmitted && !subject && (
                  <span className="tooltip">Subject is required</span>
                )}
              </div>
              <div
                className={contactStyles.contactMeContainerOneTextareaContents}
              >
                <label htmlFor="message" className={finalContactLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={finalContactMeInput}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  cols={50}
                  required
                />
              </div>
              {formSubmitted && !message && (
                <span className="tooltip">Message is required</span>
              )}
              <div className={contactStyles.contactMeContainerOneBtnContents}>
                <button className={finalContactMeBtn}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
