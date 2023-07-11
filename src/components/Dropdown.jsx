import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSelectClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="test">
      <div className="dropdown" ref={menuRef}>
        <div className="userName" onClick={handleSelectClick}>
          <span className="name">Ezequiel Almonte</span>
          <div className="userIcon">
            <div className="circle">EA</div>
          </div>
        </div>
        <ul className={isMenuOpen ? "menu menu-open" : "menu"}>
          <li>
            <Link to="/" onClick={() => handleSelectClick()}>
              <span className="material-symbols-outlined">grid_view</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/charts" onClick={() => handleSelectClick()}>
              <span className="material-symbols-outlined">Monitoring</span>
              <span>Charts</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => handleSelectClick()}>
              <span className="material-symbols-outlined">person</span>
              <span>Profile</span>
            </Link>
          </li>         
          <li>
            <Link to="/test" onClick={() => handleSelectClick()}>
              <span className="material-symbols-outlined">T</span>
              <span>Test</span>
            </Link>
          </li>
          <li>
            <Link to="" onClick={() => handleSelectClick()}>
              <span className="material-symbols-outlined">Logout</span>
              <span>Logout</span>
            </Link>
          </li>
        </ul>        
      </div>
    </div>
  );
};
