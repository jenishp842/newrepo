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
