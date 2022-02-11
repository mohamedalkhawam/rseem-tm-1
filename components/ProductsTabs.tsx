import { useEffect, useRef, useState } from "react";
import InPageTabs from "./InPageTabs";
import { useTransition, animated, config } from "react-spring";
import Image from "next/image";
import {
  fadeX,
  fadeY,
  productsBox,
  tabsAnimation,
} from "../utils/gsapAiamtiom/gsap";
import gsap from "gsap";

type itemProp = {
  id: number;
  color?: string;
  delay?: number;
};

const products = [
  [
    { id: 1, color: "red", delay: 100, y: 300, x: -300 },
    { id: 2, delay: 200, y: 300, x: 300 },
    { id: 3, delay: 300, y: 300, x: -300 },
    { id: 4, delay: 400, y: 300, x: 300 },
  ],
  [{ id: 5, color: "blue" }, { id: 6 }, { id: 7 }, { id: 8 }],
  [{ id: 9, color: "yellow" }, { id: 10 }, { id: 11 }, { id: 12 }],
  [{ id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }],
];

const ProductsTabs = () => {
  const [id, setId] = useState(5);
  const [items, setItems] = useState<{}[]>([]);
  const preId = useRef(5);
  const tlRef: any = useRef({});
  const itemsRef = useRef<HTMLElement[][]>([[], [], [], []]);
  console.log(itemsRef.current);
  console.log(tlRef.current);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !itemsRef.current[id].includes(el)) {
      itemsRef.current[id].push(el);
    }
  };

  function animateProducts() {
    if (!tlRef.current[id] && id !== 5) {
      tlRef.current[id] = gsap.timeline();
      items.map((item, i) => {
        tlRef.current[id].add(
          gsap.fromTo(
            itemsRef.current[id][i],
            { scale: 0, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 1, ease: "bounce" }
          ),
          0.2 * i
        );
      });
    }
  }

  useEffect(() => {
    animateProducts();
  }, [id]);

  useEffect(() => {
    preId.current !== 5 && tlRef.current[preId.current].progress(0).pause();
    id !== 5 && tlRef.current[id].restart();
    preId.current = id;
  }, [id]);

  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const productsBoxRef = useRef(null);
  const boxReference = useRef(null);

  useEffect(() => {
    fadeX(imgRef, "-100%");
    fadeX(titleRef, "100%");
    fadeX(bodyRef, "100%");
    productsBox(productsBoxRef, boxReference);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row  justify-center mb-8">
        <div
          ref={imgRef}
          className="relative lg:mr-24 -top-12 shrink-0  w-[70vw] h-[70vw] max-w-[370px] max-h-[370px] "
        >
          <Image
            src="/fullMachine.png"
            alt="machine"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <h4
            ref={titleRef}
            className="font-cake font-thin text-3xl md:text-5xl text-primary-100 lg:pt-12 pb-7"
          >
            portfolio and products
          </h4>
          <p ref={bodyRef} className="font-myriad font-light ">
            Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam
            Nonummy Nibh Euismod Lorem Ipsum Dolor Sit Amet, Consectetuer
            Adipiscing Elit,{" "}
          </p>
          <div className="flex  justify-center lg:justify-start mt-8">
            <InPageTabs
              getId={(i) => {
                setId(i);
                setItems(products[i]);
              }}
              options={["app", "wep", "test", "test"]}
            />
          </div>
        </div>
      </div>
      <div ref={boxReference} />
      <div ref={productsBoxRef} className=" w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center min-h-[70vh]">
          {items.map((item, i) => (
            <div
              ref={addToRef}
              key={i}
              className="p-4 border shadow-xl rounded-3xl h-[250px] w-[330px] sm:w-[300px] flex justify-center items-center  sm:mx-5  mb-7"
            >
              <Image
                src="/devices.png"
                alt="product"
                width="300"
                height="170"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTabs;
