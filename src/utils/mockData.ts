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
  // {
  //   label: 'Agents',
  //   initiallyOpened: true,
  //   links: [
  //     { label: 'Agents', link: '/login' },
  //     { label: 'Deposits', link: '/' },
  //     { label: 'Due Amounts', link: '/' },
  //     { label: 'Payment Collection', link: '/' },
  //   ],
  // },
  // {
  //   label: 'Bookings',
  //   initiallyOpened: true,
  //   links: [
  //     { label: 'Blank Booking', link: '/login' },
  //     { label: 'Existing Bookings', link: '/' },
  //     { label: 'Incomplete Bookings', link: '/' },
  //     { label: 'Unconfirmed Bookings', link: '/' },
  //   ],
  // },
]

export type Person = {
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
}

export const TableMockData = [
  {
    firstName: 'Wava',
    lastName: 'Hoppe',
    address: '4456 Towne Estates',
    city: 'Edmond',
    state: 'New Jersey',
  },
  {
    firstName: 'Kamren',
    lastName: 'Kemmer',
    address: '237 Reinger View',
    city: 'Kesslermouth',
    state: 'New Jersey',
  },
  {
    firstName: 'Dillon',
    lastName: 'Hackett',
    address: '79266 Cronin Rest',
    city: 'Conroyland',
    state: 'Colorado',
  },
  {
    firstName: 'Wilber',
    lastName: 'Von',
    address: '4162 Della Roads',
    city: 'Champaign',
    state: 'Idaho',
  },
  {
    firstName: 'Ronny',
    lastName: 'Lowe',
    address: '4057 Burley Extensions',
    city: 'Siennastead',
    state: 'Alaska',
  },
  {
    firstName: 'Lavinia',
    lastName: 'Kreiger',
    address: '24310 Aufderhar Union',
    city: 'Ceceliachester',
    state: 'Kentucky',
  },
  {
    firstName: 'Tracy',
    lastName: 'Wilkinson',
    address: '7204 Claudine Summit',
    city: 'Fort Melanychester',
    state: 'Tennessee',
  },
]
