import Image from "next/image";

interface TitleDescriptionImageProps {
  title: string;
  description: string;
  imageUrl: any;
  btn_text: string;
}

const TitleDescriptionImage = ({
  title,
  description,
  imageUrl,
  btn_text,
}: TitleDescriptionImageProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-4 px-4 gap-10 w-full justify-between">
      <div className="flex flex-col">
        <h2 className="text-black text-3xl md:text-5xl font-semibold font-inter w-full md:w-96">
          {title}
        </h2>
        <p className="w-full md:w-[435px] text-black text-opacity-60 text-sm md:text-base font-normal font-inter leading-7">
          {description}
        </p>
        <div className="w-full md:w-[180px] h-[60px] bg-black rounded-2xl flex justify-center items-center mt-6 md:mt-10">
          <div className="text-white text-sm font-semibold font-inter">
            {btn_text}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[651px] h-[300px] md:h-[500px] bg-gradient-to-b from-cyan-50 to-cyan-50 rounded-[20px] md:rounded-[30px] mt-6 md:mt-0">
        <Image
          className="ml-4 w-full h-full object-cover rounded-[20px] md:rounded-[30px]"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};

export default TitleDescriptionImage;
