import { Outlet, Link } from "react-router-dom";

const Navigator = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/tournaments">Home</Link>
          </li>
          <li>
            <Link to="/ladder">Ladder</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigator;