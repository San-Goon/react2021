import { NavLink } from "react-router-dom";
const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(location);
            return match !== null && location.search === "";
          }}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=kyle"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(match, location);
            return match !== null && location.search === "?name=kyle";
          }}
        >
          about?name=kyle
        </NavLink>
      </li>
    </ul>
  );
}
