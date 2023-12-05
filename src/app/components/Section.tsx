const Section = ({ title, content }: any) => {
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 font-['Inter'] mb-[24px]">{title}</h2>
      <p className="w-[706px] text-center text-black text-opacity-60 text-base font-normal font-['Inter'] leading-7">{content}</p>
    </section>
  );
};

export default Section;
