import React, { useState, useEffect } from "react";
import bglab from "../assets/labor3.png";
import Navlabour from "../Components/Navlabour";
import service1 from "../assets/service1.png";
import healthcare from "../assets/healthcare.png";
import contract from "../assets/contract.png";
import payment from "../assets/payment.png";
import { Link } from "react-router-dom";
import Footerlabour from "../Components/Footerlabour";
import Offer from "../Components/Offer";
import { useTranslation } from "react-i18next";

const TypingTextSection = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const fullText = t("Hello, Welcome to WorkWagon. Find Nearby Jobs Easily.1");
  const speed = 70;
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setAnimationComplete(true); // Set animationComplete to true when the text is fully typed
        clearInterval(typingInterval); // Clear the interval to stop the animation
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText, speed]);

  const backgroundStyle = {
    backgroundImage: `url(${bglab})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Navlabour />
      <div
        className="z-0 min-h-[400px] md:min-h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center justify-start"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-0 text-white text-left p-4 max-w-[70%]">
          <h1 className="text-4xl md:text-6xl font-bold overflow-wrap">
            {text}
          </h1>
        </div>
      </div>
    </>
  );
};

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center justify-center p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform transform duration-300 border border-blue-600"
    >
      <img src={imageSrc} alt={title} className="w-24 h-24 " />
      <h2 className="text-lg font-semibold text-blue-800 mt-4">{title}</h2>
      <p className="text-sm text-blue-600 mt-2">{description}</p>
    </Link>
  );
};

const CardsSection = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      imageSrc: service1,
      title: t("Find Job.2"),
      description: t("Find Nearby Jobs.2"),
      link: "/labourjobs",
    },
    {
      imageSrc: healthcare,
      title: t("Insurance.2"),
      description: t("Find suitable Insurance.2"),
      link: "insurance",
    },
    {
      imageSrc: contract,
      title: t("Employer Manage Jobs.2"),
      description: t("Contracts will be given based on your skills.2"),
      link: "/labour-employer-home",
    },
    {
      imageSrc: payment,
      title: t("Track Your Payment.2"),
      description: t("You Can Track Your Money.2"),
      link: "/card4",
    },
  ];

  return (
    <div className="container mx-auto py-8 bg-blue-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const LabourHomeSection = () => {
  return (
    <>
      <TypingTextSection />
      <CardsSection />
      <Footerlabour />
    </>
  );
};

export default LabourHomeSection;
