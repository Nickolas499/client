import Logo from "../img/logo.svg";

export const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img src={Logo} alt="Nobel Biocare" />
      </div>
      <nav>
        <ul>
          <li><div><span class="material-symbols-outlined">grid_view</span><span>Dashboard</span></div></li>          
          <li><div><span class="material-symbols-outlined">Monitoring</span><span>Charts</span></div></li>
          <li><div><span class="material-symbols-outlined">person</span><span>Profile</span></div></li>
          <li><div><span class="material-symbols-outlined"></span><span>-</span></div></li>
          <li><div><span class="material-symbols-outlined"></span><span>-</span></div></li>
          <li><div> <span class="material-symbols-outlined">Shield </span><span>Admin</span></div></li>
        </ul>
      </nav>
    </aside>
  );
};
