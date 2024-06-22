import "./Header.less";
import HouseIcon from "@mui/icons-material/House";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import { header, HeaderChildren } from "../../models/HeaderModel";

type Props = {
  isActive: any;
  toggleMenu: any;
};

export default function Header({ isActive, toggleMenu }: Props) {
  const navigate = useNavigate();

  console.log(header.length);

  for (let i = 0; i < header.length; i++) {
    if (header[i].children !== null) {
      console.log("Header");
    } else {
      console.log("Not header");
    }
  }

  return (
    <header>
      <div className="nav-menu">
        <div className="menu-container">
          <div className="logo" onClick={() => navigate("/")}>
            <HouseIcon className="house" fontSize={"large"} />
            <h2>My Hobbies</h2>
          </div>
          <nav className="main-links">
            <ul>
              {header
                .filter((item) => item.right === false)
                .map((item) => {
                  if (item.children !== null) {
                    return (
                      <li>
                        <span>{item.name}</span>
                        <div className="group-items">
                          {item.children?.map((itemChildren) => {
                            return (
                              <Link to={itemChildren.url}>
                                {itemChildren.name}
                              </Link>
                            );
                          })}
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link to={item.url as string}>{item.name}</Link>
                      </li>
                    );
                  }
                })}
            </ul>
          </nav>
          <nav className="other-links">
            <ul>
              {header
                .filter((item) => item.right === true)
                .map((item) => {
                  if (item.children !== null && item.name === "Avatar") {
                    return (
                      <li>
                        <PersonIcon className="avatar" fontSize={"large"} />
                        <div className="group-items">
                          {item.children?.map((itemChildren) => {
                            if (itemChildren.name === "Logout") {
                              return (
                                <div className="logout-section">
                                  <Link to={itemChildren.url}>
                                    {itemChildren.name}
                                  </Link>
                                  <LogoutOutlinedIcon className="logout-icon" fontSize="small" />
                                </div>
                              );
                            } else {
                              return (
                                <Link to={itemChildren.url}>
                                  {itemChildren.name}
                                </Link>
                              );
                            }
                          })}
                        </div>
                      </li>
                    );
                  } else if (item.children === null) {
                    return (
                      <li>
                        <Link to={item.url as string}>{item.name}</Link>
                      </li>
                    );
                  } else return <></>;
                })}
            </ul>
          </nav>
        </div>

        <div className="mobile-menu-container">
          <div className="header-icon-container" onClick={() => toggleMenu()}>
            <p>Menu</p>
            <MenuIcon className="menuIcon"></MenuIcon>
          </div>

          <div className={isActive ? "active" : "not-active"}>
            <div className="mobile-menu-content">
              <nav>
                <ul>
                  {header
                    .filter((item) => item.name !== "Avatar")
                    .map((item) => {
                      if (item.children !== null) {
                        return (
                          <li>
                            <span>{item.name}</span>
                            <KeyboardArrowDownIcon />
                            <div className="group-items">
                              {item.children?.map((itemChildren) => {
                                return (
                                  <Link to={itemChildren.url}>
                                    {itemChildren.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </li>
                        );
                      } else {
                        return (
                          <li>
                            <Link to={item.url as string}>{item.name}</Link>
                          </li>
                        );
                      }
                    })}
                  {header
                    .filter((item) => item.name === "Avatar")
                    .map((item) => {
                      return (
                        <li className="avatar-list">
                          <PersonIcon className="avatar" fontSize={"large"} />
                          <div className="group-items">
                            {item.children?.map((itemChildren) => {
                              if (itemChildren.name === "Logout") {
                                console.log(itemChildren.name);
                                return (
                                  <div className="logout-section">
                                    <Link to={itemChildren.url}>
                                      {itemChildren.name}
                                    </Link>
                                      <LogoutOutlinedIcon className="logout-icon" />
                                  </div>
                                );
                              } else {
                                return (
                                  <Link to={itemChildren.url}>
                                    {itemChildren.name}
                                  </Link>
                                );
                              }
                            })}
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
