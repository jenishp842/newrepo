import { useState } from 'react';
import Sidebar from './SideBar';
import Header from './header/Header';

const Layout = props => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { children } = props;
  return (
    <>
      <Header/>
      <Sidebar isMenuOpened={menuOpen} openLeftMenuCall={setMenuOpen} />
      {/* <Navbar
        path={window.location.pathname}
        openLeftMenuCall={setMenuOpen}
        isMenuOpened={menuOpen}
      /> */}
      <div
        className="main-content"
        style={{ paddingLeft: menuOpen ? '250px' : '90px', transition: 'all ease-in-out 0.4s' }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
