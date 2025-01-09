import Feed from "@components/sections/feed/Feed";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="container">
        <div className="flex flex-col justify-center gap-10 items-center">
          <div className=" text-center flex flex-col justify-center items-center">
            <h1 className="head_text text-center">
              Unleash Creativity with
              <br className="max-md:hidden" />
              <span className="purbel_gradient text-center">
                AI-Driven Prompts
              </span>
            </h1>
          </div>
          <Feed />
        </div>
      </div>
    </section>
  );
}
