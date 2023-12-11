import Image from "next/image";
import ImgCorner from "../../../public/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png";
import ImgCornerRight from "../../../public/Photo-plate.png";

const Feedback = () => {
  return (
    <div className="relative flex justify-center mb-4 md:mb-4 lg:mb-4">
      <div className="w-full md:w-[720px] lg:w-[1280px] h-[242px] md:h-[322px] lg:h-[442px] bg-cyan-50 rounded-[20px] md:rounded-[40px] lg:rounded-[60px] relative overflow-hidden">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <p className="text-black text-2xl md:text-4xl lg:text-5xl font-semibold font-inter">
            Deliciousness to your inbox
          </p>
          <div className="w-[320px] md:w-[520px] lg:w-[620px] text-center text-black text-opacity-60 text-base md:text-lg lg:text-xl font-normal font-inter leading-7 mt-4 md:mt-8 lg:mt-12 z-[1]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </div>
          <div className="flex w-full md:w-[480px] h-20 bg-white rounded-3xl justify-between items-center px-2 mt-4 md:mt-8 lg:mt-12 z-[1]">
            <input
              className="w-full md:w-2/3 outline-none px-3"
              type="text"
              placeholder="Your email address..."
            />
            <div className="w-1/3 md:w-1/4 h-[60px] bg-black rounded-2xl flex justify-center items-center">
              <div className="text-white text-sm md:text-base font-semibold font-inter">
                Subscribe
              </div>
            </div>
          </div>
        </div>

        {/* Image at the bottom left corner */}
        <div className="absolute bottom-0 left-0 transform -rotate-30">
          <div className="w-[240px] md:w-[370px] h-[240px] md:h-[360px]">
            <Image
              src={ImgCorner}
              alt="src img"
              layout="responsive"
              width={409.54}
              height={400.08}
            />
          </div>
        </div>

        {/* Image at the bottom right corner */}
        <div className="absolute bottom-0 right-0 transform rotate-30">
          <div className="w-[160px] md:w-[270px] h-[160px] md:h-[240px]">
            <Image
              src={ImgCornerRight}
              alt="src img"
              layout="responsive"
              width={355.07}
              height={355.62}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
