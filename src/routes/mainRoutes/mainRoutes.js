import React from 'react';

export const guestRoutes = [
  {
    path: '/signin',
    name: 'Signin',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/Login')),
  },
  {
    path: '/otp',
    name: 'OTPVERIFY',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/OtpScreen')),
  },
  {
    path: '/reset-password',
    name: 'OTPVERIFY',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/ResetPassword')),
  },
];

export const userRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: React.lazy(() => import('../../views/user/Dashboard/Dashboard')),
  },
  {
    path: '/early-investors',
    name: 'Users-early-invester',
    exact: true,
    component: React.lazy(() => import('../../views/user/users/EarlyInvestors')),
  },
  {
    path: '/investors',
    name: 'Users-invesrtors',
    exact: true,
    component: React.lazy(() => import('../../views/user/users/Investor')),
  },
  {
    path: '/property-managers',
    name: 'Users-property-manager',
    exact: true,
    component: React.lazy(() => import('../../views/user/users/ProppertyManagers')),
  },
  {
    path: '/view-user',
    name: 'ViewUSER',
    exact: true,
    component: React.lazy(() => import('../../views/ViewUser/ViewUser')),
  },
  {
    path: '/admin-management',
    name: 'Admin-management',
    exact: true,
    component: React.lazy(() => import('views/adminmanagment/AdminManagment')),
  },
  {
    path: '/fiat-wallet',
    name: 'Fiat-wallet',
    exact: true,
    component: React.lazy(() => import('views/wallet/FiatWallet')),
  },
  {
    redirectRoute: true,
    name: 'dashboardRedirect',
    path: '/dashboard',
  },
];
