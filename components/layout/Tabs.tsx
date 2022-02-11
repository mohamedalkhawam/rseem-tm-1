type tabsProps = {
  name: string;
  tabsStyle?: string;
  leftPartInfo: string;
  menuBottom?: boolean;
};

type leftPart = {
  name: string;
  info: string;
};

const LeftPart = ({ name, info }: leftPart) => {
  return (
    <div className="relative  ">
      <div className="flex items-center ">
        <div className="w-[1.4rem] h-[1.4rem]  motion-safe:animate-pulse   bg-primary-100 rounded-full mr-1 mt-1 " />
        <h2 className="text-3xl first-letter:text-4xl text-primary-200 font-cake font-bold capitalize transition-all duration-700 transform opacity-0 group-hover:opacity-100 -translate-y-[5rem] group-hover:translate-y-0">
          {name}
        </h2>
      </div>
      <p className="pl-7 text-[#777] text-xs font-myriad font-light leading-4 text-left transition-all duration-700 delay-700 opacity-0 group-hover:opacity-100">
        {info}
      </p>
    </div>
  );
};

const homeObj = {
  "FRONT-END": ["next", "React", "Vue", "angular", "Tailwindcss"],
  "BACK-END": ["Node", "Laravel", "golang", "java", "Python"],
  MOBILE: ["react-native", "flutter", "swift", "kotlen", "xamarin"],
};
const home = (
  <div className="columns-3 overflow-hidden">
    <div className="transition-all duration-700 transform translate-x-[25rem] group-hover:translate-x-0 easeOutBack">
      <h3 className="font-semibold text-[#444] first-letter:text-primary-100 ">
        FRONT-END
      </h3>
      {homeObj["FRONT-END"].map((item, i) => (
        <p key={i} className="text-[#888] capitalize">
          {item}
        </p>
      ))}
    </div>
    <div className="transition-all duration-700 transform delay-200 translate-x-[25rem] group-hover:translate-x-0 easeOutBack">
      <h3 className="font-semibold text-[#444] first-letter:text-primary-100 ">
        BACK-END
      </h3>
      {homeObj["BACK-END"].map((item, i) => (
        <p key={i} className="text-[#888] capitalize">
          {item}
        </p>
      ))}
    </div>
    <div className="transition-all duration-700 transform delay-[400ms] translate-x-[25rem] group-hover:translate-x-0 easeOutBack">
      <h3 className="font-semibold text-[#444] first-letter:text-primary-100 ">
        MOBILE
      </h3>
      {homeObj["MOBILE"].map((item, i) => (
        <p key={i} className="text-[#888] capitalize">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const Tabs = ({ name, tabsStyle, leftPartInfo, menuBottom }: tabsProps) => {
  const rendermenu: any = {
    home: home,
    services: home,
    products: home,
  };

  return (
    <div
      aria-haspopup="true"
      className={`hidden lg:block group overflow-hidden py-4 transition-all h-full duration-500 text-center hover:bg-primary-100/40 cursor-pointer  ${
        tabsStyle ? tabsStyle : "px-5 py-12"
      }`}
    >
      <div className="uppercase h-full font-cake font-thin group flex justify-center">
        {name.split("").map((l, i) => (
          <p
            key={i}
            className="group-hover:animate-bounce"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {l}
          </p>
        ))}
      </div>

      <div
        className={`w-[50rem] py-1 fixed h-72 mb-4 bottom-[100%] group-hover:h-72 -top-[1000rem] ${
          menuBottom
            ? "group-hover:top-[7.5rem] right-20"
            : "group-hover:-top-[18rem] left-0"
        } group-hover:absolute group-hover:block z-50`}
      >
        <div className="bg-white  w-full h-full flex rounded-[25px] shadow-md">
          <div className="w-1/3  h-full rounded-l-[25px] px-8 py-12 ">
            <LeftPart name={name} info={leftPartInfo} />
          </div>
          <div className="w-2/3 bg-gray-100 h-full rounded-[25px] py-16 ">
            {rendermenu[name]}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
