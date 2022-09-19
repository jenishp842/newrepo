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
];

export const userRoutes = [
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Dashboard/Dashboard')),
  // },
];
