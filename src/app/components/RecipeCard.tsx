import Image from "next/image";

const RecipeCard = ({ imageUrl, name, duration }: any) => {
  return (
    <div className="max-w-sm rounded-[30px] bg-[#E7F9FD] mb-8 overflow-hidden">
      <div className="h-48 w-[400px] relative">
        <Image
          className="w-full h-full object-fill"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
        <p className="text-sm font-medium font-['Inter']">{duration}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
