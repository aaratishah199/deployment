import { routes } from 'constants/constants'

export type BranchTableType = {
  branchCode: string
  branchName: string
  address: string
  contactDetails: string
  status: string
}

const { companyProfile, branches, suppliers } = routes

export const NavbarMockdata = [
  { label: 'Dashboard' },
  {
    label: 'Administration',
    initiallyOpened: true,
    links: [
      { label: 'Company Profile', link: companyProfile },
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
          { label: 'Exchange Rates', link: '/' },
          { label: 'Payment Gateway', link: '/' },
          { label: 'Agent Groups', link: '/' },
          { label: 'Supplier Rules', link: '/' },
          { label: 'Sales Rules', link: '/' },
        ],
      },
    ],
  },
]

export const data = [
  {
    branchCode: 'BH01',
    branchName: 'Bon Hoidays Private Limite',
    address: 'Kathmandu, Nepal',
    contactDetails: '01-3746384',
    status: 'active',
  },
  {
    branchCode: 'BH02',
    branchName: 'Eight Eyes Travel',
    address: 'Kathmandu, Nepal',
    contactDetails: '01-947539',
    status: 'inActive',
  },
  {
    branchCode: 'BH03',
    branchName: 'Arya Village Travel',
    address: 'Kathmandu, Nepal',
    contactDetails: '01-934857',
    status: 'active',
  },
  {
    branchCode: 'BH04',
    branchName: 'Global Asia Tours',
    address: 'Kathmandu, Nepal',
    contactDetails: '01-93857',
    status: 'inActive',
  },
]
