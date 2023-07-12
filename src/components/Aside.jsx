import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img src={Logo} alt="Nobel Biocare" />
      </div>
      <nav>
        <ul>
          <li><Link to="/"><div><span className="material-symbols-outlined">grid_view</span><span>Dashboard</span></div></Link></li>          
          <li><Link to="/charts"><div><span className="material-symbols-outlined">Monitoring</span><span>Charts</span></div></Link></li>
          <li><Link to="/profile"><div><span className="material-symbols-outlined">person</span><span>Profile</span></div></Link></li>
          {/* <li><Link to="/"><div><span className="material-symbols-outlined"></span><span></span></div></Link></li> */}
          <li><Link to="/test"><div><span className="material-symbols-outlined">T</span><span>Test</span></div></Link></li>
          <li><Link to="/admin"><div> <span className="material-symbols-outlined">Shield </span><span>Admin</span></div></Link></li>
        </ul>
      </nav>
    </aside>
  );
};
