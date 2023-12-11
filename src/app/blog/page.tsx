import Feedback from "../components/Feedback";
const Blog = () => {
  return (
    <main className="mx-8">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center text-black text-[64px] font-semibold font-['Inter']">
          Blog & Article
        </div>
        <div className="w-[840px] text-center text-black text-opacity-60 text-base font-normal font-['Inter'] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </div>
        <div className="flex justify-center items-center w-[700px] h-20 bg-white rounded-3xl border border-black border-opacity-10">
            <input
              className="w-full md:w-2/3 outline-none px-3"
              type="text"
              placeholder="Search article, news or recipe..."
            />
            <div className="w-1/3 md:w-1/4 h-[60px] bg-black rounded-2xl flex justify-center items-center">
              <div className="text-white text-sm md:text-base font-semibold font-inter">
                Subscribe
              </div>
            </div>
          </div>
      </div>
      <Feedback />
    </main>
  );
};
export default Blog;
