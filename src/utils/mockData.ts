import { routes } from 'constants/routes'

const { comapnyProfile, branches, suppliers } = routes
export const NavbarMockdata = [
  { label: 'Dashboard' },
  {
    label: 'Administration',
    initiallyOpened: true,
    links: [
      { label: 'Company Profile', link: comapnyProfile },
      { label: 'Branches', link: branches },
      { label: 'User Roles', link: '/' },
      { label: 'Staffs', link: '/' },
      { label: 'Clients', link: '/' },
      { label: 'Blocaked Destinations', link: '/' },
      {
        label: 'Company Settings',
        initiallyOpened: true,
        links: [
          { label: 'Suppliers', link: suppliers },
          { label: 'Banks', link: '/' },
          { label: 'Excchange Rates', link: '/' },
          { label: 'Payment Gateway', link: '/' },
          { label: 'Agent Groups', link: '/' },
          { label: 'Supplier Rules', link: '/' },
          { label: 'Sales Rules', link: '/' },
        ],
      },
    ],
  },
  {
    label: 'Agents',
    initiallyOpened: true,
    links: [
      { label: 'Agents', link: '/login' },
      { label: 'Deposits', link: '/' },
      { label: 'Due Amounts', link: '/' },
      { label: 'Payment Collection', link: '/' },
    ],
  },
  {
    label: 'Bookings',
    initiallyOpened: true,
    links: [
      { label: 'Blank Booking', link: '/login' },
      { label: 'Existing Bookings', link: '/' },
      { label: 'Incomplete Bookings', link: '/' },
      { label: 'Unconfirmed Bookings', link: '/' },
    ],
  },
]
