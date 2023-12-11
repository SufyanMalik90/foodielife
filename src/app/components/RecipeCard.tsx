import Image from "next/image";
import Timer from "../../../public/Timer.svg";
import Knife from "../../../public/ForkKnife.svg";

const RecipeCard = ({ imageUrl, name, duration, category }: any) => {
  return (
    <div className="max-w-sm rounded-[30px] bg-[#E7F9FD] mb-8 overflow-hidden">
      <div className="h-48 w-[400px] relative">
        <Image
          className="w-full h-full object-fill"
          src={imageUrl}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
        <div className="flex gap-3 items-center">
          <Image className="w-5 h-5 object-fill" src={Timer} alt="timer" />
          <p className="text-sm font-medium font-['Inter']">{duration}</p>
          <Image className="w-5 h-5 object-fill" src={Knife} alt="Knife" />
          <p className="text-sm font-medium font-['Inter']">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
