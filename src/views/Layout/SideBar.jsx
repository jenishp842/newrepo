import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import mogulLogo from 'assets/images/mogullogo.png';
import './layout.css';

const dataItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    logo: 'uil-home-alt me-2',
  },
  {
    name: 'Admins',
    link: '/admins',
    logo: 'uil-user-circle me-2',
  },
  {
    name: 'Users',
    link: '/user',
    logo: 'uil-user me-2',
  },
  {
    name: 'Properties',
    link: '/property',
    logo: 'uil-home me-2',
  },
  {
    name: 'Governance',
    link: '/governance',
    logo: 'uil-building me-2',
  },
  {
    name: 'Contracts',
    link: '/contracts',
    logo: ' uil-arrows-v me-2',
  },
  {
    name: 'My wallet',
    logo: 'uil uil-wallet font-size-18 align-middle me-2 text-muted',
    nestedtab: [
      {
        name: 'Mogul Wallet',
        link: '/my-wallet/mogul',
        logo: 'uil uil-wallet font-size-18 align-middle me-2 text-muted',
      },
      {
        name: 'Exchange Wallet',
        link: '/my-wallet/exchange',
        logo: 'uil uil-wallet font-size-18 align-middle me-2 text-muted',
      },
    ],
  },
  {
    name: 'Cashflow',
    link: '/cashflow',
    logo: 'uil-money-bill me-2',
  },
  {
    name: 'Announcement',
    link: '/announcement',
    logo: ' uil-list-ul me-2',
  },
  {
    name: 'Account Details',
    link: '/addbankaccount',
    logo: 'uil-money-bill me-2',
  },
  {
    name: 'Logout',
    logo:'uil-sign-out-alt me-2'
  },
];

function Sidebar({ isMenuOpened }) {
  const { pathname } = window.location;
  const [nestedIndex, setNestedIndex] = useState(0);
  const history = useHistory();
  return (
    <>
      <nav className={isMenuOpened ? '' : 'nav_show'}>
        <div className="d-flex side_bar_top" style={{ background: '#fff' }}>
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
                style={{ cursor: 'pointer' }}
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
                    style={{ color: pathname === item.link ? 'rgb(11 23 248)' : 'black' }}
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
                            ? 'sidebar-nav-item nonActive'
                            : 'sidebar-nav-item nonActive'
                          : pathname === nest.link
                          ? 'activeitem'
                          : ''
                      }
                      onClick={() => {
                        history.push(nest.link);
                        // openLeftMenuCallBack();
                      }}
                      key={nest.name}
                      style={{ cursor: 'pointer', backgroundColor: '#d3d3d36e', border: 'none' }}
                    >
                      <Link
                        to={nest.link}
                        onClick={() => {
                          // openLeftMenuCallBack();
                        }}
                        style={{ color: pathname === nest.link ? '#2b32b2' : 'black' }}
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
