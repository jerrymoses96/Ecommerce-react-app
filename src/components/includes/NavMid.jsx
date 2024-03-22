import { Link } from "react-router-dom";

export default function NavMid() {
  return (
    <div>
      <ul className="flex gap-5 items-center font-normal ">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Stays</li>
        <li>Become a host</li>
      </ul>
    </div>
  );
}
