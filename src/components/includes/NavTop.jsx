import { Link } from "react-router-dom";

export default function NavTop() {
  return (
    <div>
      <Link to={"/"}>
        <h1>
          <img src="/src/assets/images/logo.png" alt="logo" />
        </h1>
      </Link>
    </div>
  );
}
