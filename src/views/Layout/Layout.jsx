import { useState } from 'react';
import Sidebar from './SideBar';
import Header from './header/Header';
import './layout.css';

const Layout = props => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { children } = props;
  return (
    <>
      <Header />
      <Sidebar isMenuOpened={menuOpen} openLeftMenuCall={setMenuOpen} />
      {/* <Navbar
        path={window.location.pathname}
        openLeftMenuCall={setMenuOpen}
        isMenuOpened={menuOpen}
      /> */}
      <div className={`main-content ${menuOpen ? 'grow-menu' : 'shrink-menu'} `}>{children}</div>
    </>
  );
};

export default Layout;
