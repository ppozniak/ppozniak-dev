import { Button } from "../../button";

export const Blog = () => {
  return (
    <section className="bg-black text-white text-center">
      <div className="container py-6">
        <div className="">
          <header className="space-y-4">
            <h2 className="text-3xl">
              <span className="font-bold">Blog</span>{" "}
              <span className="underline">posts</span>
            </h2>
            <p className="text-sm max-w-5xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vitae ab, fugiat quisquam exercitationem, natus suscipit sint,
              animi totam ipsam tempora atque possimus voluptates.
            </p>
          </header>

          <div className="h-96">{/* @TODO: Articles here */}</div>
        </div>

        <footer className="flex justify-end items-center gap-x-4 text-sm">
          ....lorem ipsum dolor sit amet{" "}
          <Button className="max-w-[200px]">View all</Button>
        </footer>
      </div>
    </section>
  );
};
