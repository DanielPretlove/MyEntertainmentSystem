
import "./Header.less";
import HouseIcon from '@mui/icons-material/House';

export default function Header() {
  
  return (
    <header className="header">
      <div className="logo">
        <HouseIcon />
        <h1>My Hobbies</h1>
    </div>
    <nav className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Hobbies</a></li>
        <li><a href="#about">Blogs</a></li>
        <li><a href="#services">Forum</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#contact">Sign out</a></li>
      </ul>
    </nav>
  </header>
  )
}