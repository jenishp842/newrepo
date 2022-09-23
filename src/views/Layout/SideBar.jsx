import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import mogulLogo from 'assets/images/mogullogo.png';
import { dataItems } from 'statics/sidebardata';
import './layout.css';



function Sidebar({ isMenuOpened }) {
  const { pathname } = window.location;
  const [nestedIndex, setNestedIndex] = useState(0);
  const history = useHistory();
  return (
    <>
      <nav className={isMenuOpened ? '' : 'nav_show'}>
        <div className="d-flex side_bar_top">
          <div className="navbar-brand-box">
            <NavLink to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={mogulLogo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={mogulLogo} alt="" height="45" />
              </span>
            </NavLink>

            <NavLink to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={mogulLogo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={mogulLogo} alt="" height="35" />
              </span>
            </NavLink>
          </div>
        </div>
        <ul>
          {dataItems.map((item, index) => (
            <>
              <li
                className={
                  isMenuOpened
                    ? pathname === item.link
                      ? 'sidebar-nav-item nonActive'
                      : 'sidebar-nav-item nonActive'
                    : pathname === item.link
                    ? 'activeitem'
                    : ''
                }
                onClick={() => {
                  if (item.nestedtab) {
                    if (nestedIndex === index) setNestedIndex(0);
                    else setNestedIndex(index);
                  } else {
                    if (item.name === 'Logout') {
                      localStorage.removeItem('authToken');
                      window.location.reload();
                      return;
                    }
                    history.push(item.link);
                    setNestedIndex(0);
                  }
                  // openLeftMenuCallBack();
                }}
                key={item.name}
              >
                {item.nestedtab ? (
                  <a>
                    <i className={item.logo} />
                    {item.name}
                    {nestedIndex === index ? (
                      <i className="uil-angle-up" />
                    ) : (
                      <i className="uil-angle-down" />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => {
                      // openLeftMenuCallBack();
                    }}
                    className={pathname === item.link ? 'color-rgb' : 'color-black'}
                  >
                    <i className={item.logo} />
                    {item.name}
                  </Link>
                )}
              </li>
              {nestedIndex && nestedIndex === index
                ? dataItems[nestedIndex].nestedtab.map(nest => (
                    <li
                      className={
                        isMenuOpened
                          ? pathname === nest.link
                            ? 'sidebar-nav-item nonActive nested-item'
                            : 'sidebar-nav-item nonActive nested-item'
                          : pathname === nest.link
                          ? 'activeitem nested-item'
                          : 'nested-item'
                      }
                      onClick={() => {
                        history.push(nest.link);
                        // openLeftMenuCallBack();
                      }}
                      key={nest.name}
                    >
                      <Link
                        to={nest.link}
                        onClick={() => {
                          // openLeftMenuCallBack();
                        }}
                        className={pathname === nest.link ? 'color-rgb' : 'color-black'}
                      >
                        <i className={nest.logo} />
                        {nest.name}
                      </Link>
                    </li>
                  ))
                : null}
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
