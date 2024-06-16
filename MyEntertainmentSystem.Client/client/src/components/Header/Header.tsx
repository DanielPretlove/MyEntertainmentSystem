
import "./Header.less";
import HouseIcon from '@mui/icons-material/House';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="menu-container">
        <div className="logo" onClick={() => navigate("/")}>
          <HouseIcon className="house" fontSize={"large"} />
          <h2>My Hobbies</h2>
        </div>
        <nav className="main-links">
          <ul>
            <li>
              <Link to="/hobbies">Hobbies</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/hobbies">Forum</Link>
            </li>
          </ul>
        </nav>
        <nav className="other-links">
          <ul>
            <li>
              <Link to="/settings">
                <SettingsOutlinedIcon fontSize={"medium"} />
              </Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="sign-out">
                <LogoutOutlinedIcon className="signout"/> 
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  </header>
  )
}