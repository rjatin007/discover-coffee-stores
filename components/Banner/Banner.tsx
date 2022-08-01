import { useState } from "react";
import type { buttonTextType, bannerPropType } from "./bannerConstants";
import Image from "next/image";
const initialText = "View Stores Nearby";

function Banner(props: bannerPropType) {
  const { onClick } = props;
  const [buttonText, setButtonText] = useState<buttonTextType>(initialText);

  const handleOnClick = () => {
    // onClick();
    setButtonText("Loading...");
  };
  return (
    // <div className="bg-[url(/static/hero.png)] bg-no-repeat bg-center bg-contain ">
    <div className="relative">
      <header className=" flex-col justify-start align-center p-4 pl-8 py-24 max-w-max ">
        <h1 className="text-blue-800 text-8xl font-sans font-bold text-left py-4   my-4 mx-0">
          <span className="text-white">Coffee</span> Connoisseur
        </h1>
        <p className="text-left my-4 text-4xl text-white">
          Discover local coffee shops!
        </p>
        <button
          className="border-2 border-blue-800 p-4 text-blue-800  my-4 text-2xl hover:bg-blue-800 hover:text-white cursor-pointer max-w-max"
          onClick={handleOnClick}
        >
          {buttonText}
        </button>
      </header>
      <div className="absolute m-auto top-0 right-40 ">
        <Image src="/static/hero.png" height={400} width={800} alt="Hero" />
      </div>
    </div>
  );
}

export default Banner;
