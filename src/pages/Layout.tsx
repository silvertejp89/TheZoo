import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>Hem</li>
          <li>Djur</li>
          <li>Kontakt</li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Kontaktinfo</p>
      </footer>
    </>
  );
};

export default Layout;
