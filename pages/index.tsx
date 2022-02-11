import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import InPageTabs from "../components/InPageTabs";
import Header from "../components/layout/Header";
import ProductsTabs from "../components/ProductsTabs";
import SubscribeBox from "../components/SubscribeBox";
import CustomeSwiper from "../components/CustomeSwiper";
import TwSwiper from "../components/TwSwiper";
import { customers, services, techArr, techObj } from "../utils/consts";
import Service from "../components/Service";
import Footer from "../components/layout/Footer";
import Technologies from "../components/Technologies";
import FeaturedServices from "../components/FeaturedServices";
import TopCustomers from "../components/TopCustomers";
import { homeAnimate } from "../utils/gsapAiamtiom/gsap";
const Home: NextPage = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const titleCircleRef = useRef(null);
  const bodyRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonCircleRef = useRef(null);
  const navRef = useRef(null);
  const navCircleRef = useRef(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  useEffect(() => {
    homeAnimate([
      logoRef,
      titleCircleRef,
      titleRef,
      bodyRef,
      buttonRef,
      buttonCircleRef,
      navRef,
      navCircleRef,
    ]);
  }, []);

  return (
    <main
      className={` mx-auto overflow-hidden`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app test" />
        <link rel="icon" href="../public/logo.png" />
      </Head>
      <section aria-details="home header">
        <div className="h-screen w-full bg-home-header  bg-cover bg-center flex flex-col justify-between ">
          {/*  <div className='absolute bg-home-header w-full h-screen bg-cover mix-blend-screen bg-center bg-no-repeat'  /> */}
          <div ref={logoRef} className="mx-auto flex justify-center pt-14">
            <Image src="/logo.png" alt="logo" width="200" height="75" />
          </div>
          <div className="mx-auto lg:mx-0 w-[90%] sm:w-[60%] lg:w-[45%] lg:pl-[10%] mt-[5%] mb-[10%] ">
            <div>
              <div className=" relative mb-6">
                <h2
                  ref={titleRef}
                  className=" font-cake font-bold text-4xl text-white relative z-[1] tracking-wide first-letter:text-[4.3rem] first-letter:mr-5"
                >
                  L, Lorem ipsum
                </h2>
                <div
                  ref={titleCircleRef}
                  className="absolute w-[4rem] h-[4rem] bg-primary-100 rounded-full -top-2 -left-4 firs"
                />
              </div>
              <p
                ref={bodyRef}
                className="font-myriad font-normal text-white pl-12"
              >
                Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed
                Diam Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet,
                Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod
                Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed
                Diam Nonummy Nibh Euismod Lorem Ipsum.
              </p>
            </div>
            <div className="group flex justify-end mt-8 ml-auto w-[16rem] ">
              <div
                ref={buttonCircleRef}
                className="relative flex   justify-center w-9 h-9 bg-primary-100 rounded-full z-[10] group-hover:bg-white mr-2 transition-[margin] duration-300 "
              >
                <Image
                  src="/rLogo2.png"
                  alt="logo"
                  width="30"
                  height="23"
                  className="transitition-all duration-500 opacity-0 group-hover:opacity-100 transform group-hover:rotate-[360deg] "
                />
              </div>
              <button
                ref={buttonRef}
                className="bg-white px-12  rounded-full z-[11] font-myriad font-normal relative"
              >
                {t("hey")}
              </button>
            </div>
          </div>
          <div className="mb-[10%]">
            <Header passRef1={navRef} passRef2={navCircleRef} />
          </div>
        </div>
      </section>
      <section aria-details="company's technologies">
        <div className="mb-52">
          <Technologies />
        </div>
      </section>
      <section aria-details="services">
        <FeaturedServices />
      </section>
      <section aria-details="portfolio and products">
        <div className=" px-[10%]">
          <ProductsTabs />
        </div>
      </section>
      <section aria-details="top customers">
        <TopCustomers />
      </section>
      <section aria-details="swiper">
        <TwSwiper />
      </section>
      <section aria-details="subscribe">
        <div className="px-[10%] relative top-16">
          <SubscribeBox />
        </div>
      </section>
      <section aria-details="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Home;