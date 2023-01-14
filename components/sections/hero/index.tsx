export const Hero = () => {
  return (
    <section className="bg-black min-h-screen text-white">
      <div className="container flex flex-col md:flex-row pt-24">
        <div className="">
          <div className="mb-12 ">
            <p className="text-3xl">Hello there!</p>

            <h1 className="text-2xl mb-6">
              I am{" "}
              <span className="font-bold md:text-4xl">
                <span className="text-primary">Patryk</span> Pozniak
              </span>
              , the
            </h1>

            <p className="font-mono text-4xl md:text-5xl max-w-sm">
              <span className="font-bold">Fullstack </span>
              <span className="underline">engineer</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="rounded bg-primary text-white p-2 max-w-xs">
              Lorem ipsum
            </button>

            <button className="rounded bg-white text-black p-2 max-w-xs">
              Lorem ipsum
            </button>
          </div>
        </div>
        {/* @TODO: What about images on mobile? */}
        <div className="hidden">{/* Images will be here */}</div>
      </div>
    </section>
  );
};
