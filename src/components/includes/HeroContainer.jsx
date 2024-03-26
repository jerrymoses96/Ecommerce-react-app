import { useSearchContext } from "../context/SearchContext";

const HeroContainer = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('src/assets/images/cddaac5cde140d8bfee785b0dc68a02b.png')",
      }}
    >
      <div className="wrapper py-16">
        <h2 className="mb-1 text-4xl font-semibold md:text-5xl lg:text-6xl">
          Find a{" "}
          <small className="text-4xl text-green-600 md:text-5xl lg:text-6xl">
            host
          </small>{" "}
          for every journey
        </h2>
        <p className="text-lg font-light md:text-xl lg:text-2xl">
          Discover the best local rental properties that fit your every travel
          need
        </p>
        <div className="mt-8 flex gap-2 rounded-lg bg-white p-4 shadow-lg">
          <input
            className="flex-1 rounded-md border border-[#D9D9D9] py-2 text-center"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="rounded-lg bg-[#00C29F] px-5 py-2 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
