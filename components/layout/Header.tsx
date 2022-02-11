import React, { useEffect, useRef } from "react";
import Tabs from "./Tabs";
import { BiSupport } from "react-icons/bi";
import useScrolledTop from "../../hooks/useScrolledTop";
import useWindowSize from "../../hooks/useWindowSize";
import { useTransition, animated } from "react-spring";
import Image from "next/image";
import { fadeY, headerAnimation } from "../../utils/gsapAiamtiom/gsap";
import { useTranslation } from "react-i18next";

type tabsArrayProps = {
  name: string;
  tabsStyle?: string;
  leftPartInfo: string;
};

type headerType = {
  passRef1?: any;
  passRef2?: any;
};

const Header = ({ passRef1, passRef2 }: headerType) => {
  const { t, i18n } = useTranslation();
  let scrolledTop = useScrolledTop();
  const { windowH } = useWindowSize();
  const headerRef = useRef(null);
  const headerLogoRef = useRef(null);
  const headerTabsRef = useRef(null);
  const headerChatRef = useRef(null);

  const tabsArray: tabsArrayProps[] = [
    {
      name: t("home"),
      tabsStyle: "rounded-l-full w-[20%] ",
      leftPartInfo:
        "Lorem Ipsum Dolor Sit Amet,Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit",
    },
    {
      name: t("services"),
      tabsStyle: "w-[20%]",
      leftPartInfo:
        "Lorem Ipsum Dolor Sit Amet,Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit",
    },
    {
      name: t("products"),
      tabsStyle: "w-[20%]",
      leftPartInfo:
        "Lorem Ipsum Dolor Sit Amet,Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit",
    },
    {
      name: t("portfolio"),
      tabsStyle: "w-[20%]",
      leftPartInfo:
        "Lorem Ipsum Dolor Sit Amet,Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit",
    },
    {
      name: t("company"),
      tabsStyle: "rounded-r-full w-[20%] ",
      leftPartInfo: "company",
    },
  ];

  useEffect(() => {
    headerAnimation(headerRef, headerLogoRef, headerTabsRef, headerChatRef);
  }, []);

  return (
    <div className="relative z-50">
      <nav
        ref={passRef1}
        className="relative hidden lg:flex  rounded-full w-[50rem]  justify-center items-center bg-white mx-auto"
      >
        <div
          ref={passRef2}
          className="absolute group flex items-center justify-center -left-20  w-[56px] h-[56px]  cursor-pointer "
        >
          <div className="transition-all duration-700 bg-primary-100 group-hover:bg-white rounded-full p-2">
            <BiSupport className="w-[40px] h-[40px] transform transition-all duration-700 text-white group-hover:text-primary-100 rotate-[360deg] group-hover:rotate-0" />
          </div>
        </div>
        {tabsArray.map(({ name, tabsStyle, leftPartInfo }, i) => (
          <Tabs
            key={i}
            name={name}
            tabsStyle={tabsStyle}
            leftPartInfo={leftPartInfo}
          />
        ))}
      </nav>

      <nav
        ref={headerRef}
        className="flex items-center w-full  fixed left-0 top-0 bg-white px-8 py-2 lg:py-0 lg:px-20 shadow-lg z-50 opacity-0"
      >
        <div
          ref={headerLogoRef}
          className=" w-[140px] h-[50px] lg:w-[200px] lg:h-[75px] shrink-0"
        >
          <Image src="/logo2.png" alt="logo" width="200" height="75" />
        </div>
        <div ref={headerTabsRef} className="flex ml-auto">
          {tabsArray.map(({ name, leftPartInfo }, i) => (
            <Tabs
              key={i}
              name={name}
              leftPartInfo={leftPartInfo}
              menuBottom={true}
            />
          ))}
        </div>
        <div
          ref={headerChatRef}
          className=" w-[56px] h-full group cursor-pointer ml-20"
        >
          <BiSupport
            size={56}
            className="  bg-primary-100 animate-bounce group-hover:animate-none cursor-pointer shadow-blue-100 shadow-sm text-white rounded-full p-3"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
