export const dataItems = [
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
    logo: 'uil-user me-2',
    nestedtab: [
      {
        name: 'Early Investors',
        link: '/earlyInvestors',
      },
      {
        name: 'Investors',
        link: '/investors',
      },
      {
        name: 'Property Managers',
        link: '/propertyManagers',
      },
    ],
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
    logo: 'uil-sign-out-alt me-2',
  },
];
