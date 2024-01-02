import Feed from "@components/Feed";

export const dynamic = 'force-dynamic'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore and Share
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Discover, Create, and Share Creative Prompts with <span className="purple_gradient font-bold">PromptPix</span>, Your Open-Source AI Prompting Tool for the Modern World
      </p>
      <Feed />
    </section>
  );
};

export default Home;
