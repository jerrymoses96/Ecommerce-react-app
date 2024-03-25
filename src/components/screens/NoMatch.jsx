import { Helmet } from "react-helmet";

const NoMatch = () => {
  return (
    <div>
      <Helmet>
        <title>No Match</title>
      </Helmet>
      <p>No Match found</p>
    </div>
  );
};

export default NoMatch;
