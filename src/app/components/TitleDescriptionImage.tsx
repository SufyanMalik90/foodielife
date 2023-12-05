import Image from "next/image";

interface TitleDescriptionImageProps {
    title: string;
    description: string;
    imageUrl: any;
  }

const TitleDescriptionImage = ({ title, description, imageUrl }:TitleDescriptionImageProps) => {
  return (
    <div className="flex items-center mx-4 gap-10 w-full justify-between">
      {/* Left side: Title and Description */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold max-w-xs">{title}</h2>
        <p className="text-gray-600 max-w-[300px]">{description}</p>
      </div>

      {/* Right side: Image */}
      <div className="w-[651px] h-[500px] bg-gradient-to-b from-cyan-50 to-cyan-50 rounded-[30px]">

      
      <Image
          className="ml-4 w-[660] h-full object-cover"
          src={imageUrl}
          alt={title}
        />
    </div>
      {/* <img className="ml-4 w-32 h-32 object-cover" src={imageUrl} alt={title} /> */}
    </div>
  );
};

export default TitleDescriptionImage;
