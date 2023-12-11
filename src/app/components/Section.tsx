const Section = ({ title, content }: any) => {
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 font-inter mb-[16px] md:mb-[24px]">{title}</h2>
      <p className="w-full md:w-[506px] lg:w-[706px] text-center text-black text-opacity-60 text-sm md:text-base lg:text-lg font-normal font-inter leading-7">{content}</p>
    </section>
  );
};

export default Section;
