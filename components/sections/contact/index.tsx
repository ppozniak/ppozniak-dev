export const Contact = () => {
  return (
    <section className="bg-pastel text-white">
      <div className="container py-6 flex flex-col md:flex-row">
        <div className="md:basis-1/2">
          <h2 className="text-3xl">
            <span className="font-bold">Contact</span>{" "}
            <span className="underline">me</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae ab, fugiat quisquam exercitationem, natus suscipit sint, animi
            totam ipsam tempora atque possimus voluptates odio assumenda
          </p>

          {/* @TODO: Add social links here */}
          <div className="min-h-[300px]">{/* @TODO: Add forms here */}</div>
        </div>

        <div className="md:basis-1/2">{/* @TODO: Add image here */}</div>
      </div>
    </section>
  );
};
