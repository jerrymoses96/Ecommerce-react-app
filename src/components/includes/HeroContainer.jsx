const HeroContainer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('src/assets/images/cddaac5cde140d8bfee785b0dc68a02b.png')",
      }}
    >
      <div className="wrapper">
        <h2 className="text-4xl font-semibold mb-1 pt-6 ">
          Find a <small className="text-green-600 text-4xl">host</small> for
          every journey
        </h2>
        <p className="text-xl font-light">
          Discover the best local rental properties that fit your every travel
          need
        </p>
      </div>
    </div>
  );
};

export default HeroContainer;
