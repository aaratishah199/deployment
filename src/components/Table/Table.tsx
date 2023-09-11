import { useMemo } from 'react'
import {
  MRT_ColumnDef,
  MRT_Icons,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table'
import { TextAxalp } from 'components/Typography'
import theme from 'constants/theme'
import { Person, data } from 'utils/mockData'
import { SortUp, Search } from 'iconoir-react'

const tableIcons: Partial<MRT_Icons> = {
  //change sort icon, connect internal props so that it gets styled correctly
  // IconArrowDown: () => <SortDown />,
  IconSearch: () => <Search />,
  IconArrowsSort: () => <SortUp width={24} height={24} />,
}

export default function Table() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'branchCode',
        header: 'Branch Code',
        mantineTableHeadCellProps: { sx: { color: 'green' } },
        Header: () => (
          <TextAxalp fz={theme.fontSizes.md}>Branch Code</TextAxalp>
        ),
      },
      {
        accessorKey: 'branchName',
        id: 'Branch Name',
        header: 'Age',
        Header: () => (
          <TextAxalp fz={theme.fontSizes.md}>Branch Name</TextAxalp>
        ),
      },
      {
        accessorKey: 'address',
        id: 'Address',
        header: 'Address',
        Header: () => <TextAxalp fz={theme.fontSizes.md}>Address</TextAxalp>,
      },
      {
        accessorKey: 'contactDetails',
        id: 'Contact Details',
        header: 'Contact Details',
        Header: () => (
          <TextAxalp fz={theme.fontSizes.md}>Contact Details</TextAxalp>
        ),
      },
      {
        accessorKey: 'status',
        id: 'Status',
        header: 'Status',
        Header: () => <TextAxalp fz={theme.fontSizes.md}>Status</TextAxalp>,
      },
    ],
    []
  )

  const table = useMantineReactTable({
    columns,
    data,
    enablePagination: false,
    icons: tableIcons,

    mantinePaperProps: {
      shadow: 'none',
      sx: {
        borderRadius: '0',
        border: 'none !important',
      },
    },

    mantineTableProps: {},
  })

  return <MantineReactTable table={table} />
}
