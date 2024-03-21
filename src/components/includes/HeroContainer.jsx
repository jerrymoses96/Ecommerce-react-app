import { useSearchContext } from "../context/SearchContext";

const HeroContainer = () => {
  const {searchQuery,setSearchQuery} = useSearchContext();
  

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('src/assets/images/cddaac5cde140d8bfee785b0dc68a02b.png')",
      }}
    >
      <div className="wrapper py-16">
        <h2 className="text-4xl font-semibold mb-1  ">
          Find a <small className="text-green-600 text-4xl">host</small> for
          every journey
        </h2>
        <p className="text-xl font-light">
          Discover the best local rental properties that fit your every travel
          need
        </p>
        <div className="p-4 bg-white rounded-lg mt-8 flex items-center gap-2 shadow-lg ">
          <input
            className="w-full border rounded-md border-[#D9D9D9] text-center py-2"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-[#00C29F] text-white px-5 py-2 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
