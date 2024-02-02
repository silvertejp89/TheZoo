import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Djur</NavLink>
          </li>
          <li>
            <NavLink to="/#contact">Kontakt</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div id="contact">
          <p>Kontaktinfo</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
