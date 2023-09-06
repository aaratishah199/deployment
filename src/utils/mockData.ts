export const NavbarMockdata = [
  { label: 'Dashboard' },
  { label: 'Company Profile' },
  { label: 'Branches' },

  {
    label: 'Company Settings',
    initiallyOpened: true,
    links: [
      { label: 'Suupliers', link: '/login' },
      { label: 'Banks', link: '/' },
      { label: 'Excchange Rates', link: '/' },
      { label: 'Payment Gateway', link: '/' },
    ],
  },

  { label: 'User Roles' },
  { label: 'Staffs' },
  { label: 'Clients' },
  { label: 'Blocked Destinations' },

  {
    label: 'Company Settings',
    initiallyOpened: true,
    links: [
      { label: 'Suupliers', link: '/' },
      { label: 'Banks', link: '/' },
      { label: 'Excchange Rates', link: '/' },
      { label: 'Payment Gateway', link: '/' },
    ],
  },
]
