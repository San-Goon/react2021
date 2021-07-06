import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/profile1">Profile1</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/about?name=kyle">about?name=kyle</Link>
      </li>
    </ul>
  );
}
