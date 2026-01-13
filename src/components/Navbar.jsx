import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">Portfolio</div>
        <div className="links">
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  );
};

export default Navbar;