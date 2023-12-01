import Image from "next/image";

export function ImageCard({ imageUrl, title, gradientColor }: any) {
  const gradientStyle = {
    background: `linear-gradient(to top, ${gradientColor} -50%, transparent)`,
  };

  return (
    <div className="w-44 rounded-[30px] shadow-lg m-2 flex flex-col items-center" style={gradientStyle}>
      <Image className="w-fit h-28 object-contain p-2" src={imageUrl} alt={title} />
      <div className="px-4 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
      </div>
    </div>
  );
}