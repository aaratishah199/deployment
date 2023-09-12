import { useMemo } from 'react'
import {
  MRT_ColumnDef,
  MRT_Icons,
  useMantineReactTable,
  flexRender,
  MRT_ToolbarAlertBanner,

} from 'mantine-react-table'
import theme from 'constants/theme'
import { BranchTableType, data } from 'utils/mockData'
import { SortUp, Search } from 'iconoir-react'
import { Flex, Stack, Table as MantineTable, Text } from '@mantine/core';

const tableIcons: Partial<MRT_Icons> = {
  IconSearch: () => <Search />,
  IconArrowsSort: () => <SortUp width={24} height={24} />,
}

export default function Table() {
  const columns = useMemo<MRT_ColumnDef<BranchTableType>[]>(
    () => [
      {
        accessorKey: 'branchCode',
        header: 'Branch Code',
        mantineTableHeadCellProps: { sx: { color: 'green' } },
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}><Text fz={theme.fontSizes.md}>Branch Code</Text><SortUp width={24} height={24} /></Flex> 
        ),
      },
      {
        accessorKey: 'branchName',
        id: 'Branch Name',
        header: 'Age',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}><Text fz={theme.fontSizes.md}>Branch Name</Text><SortUp width={24} height={24} /></Flex> 
        ),
      },
      {
        accessorKey: 'address',
        id: 'Address',
        header: 'Address',
        Header: () => <Flex direction={'row'} gap={theme.spacing.sm}><Text fz={theme.fontSizes.md}>Address</Text><SortUp width={24} height={24} /></Flex> 
      },
      {
        accessorKey: 'contactDetails',
        id: 'Contact Details',
        header: 'Contact Details',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}><Text fz={theme.fontSizes.md}>Contact Details</Text><SortUp width={24} height={24} /></Flex> 
        ),
      },
      {
        accessorKey: 'status',
        id: 'Status',
        header: 'Status',
        Header: () => <Flex direction={'row'} gap={theme.spacing.sm}><Text fz={theme.fontSizes.md}>Status</Text><SortUp width={24} height={24} /></Flex> ,
      },
    ],
    []
  )

  const table = useMantineReactTable({
    columns,
    data,
    enablePagination: false,
    icons: tableIcons,
    enableFilters: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnActions: false,

    mantineColumnActionsButtonProps: {color:'red'},

    mantinePaperProps: {
      shadow: 'none',
    },

    mantineTableProps: {
      bg: 'red'
    },
  })

  return (
    <Stack>
      <MantineTable
        fontSize="lg"
        highlightOnHover
        horizontalSpacing="xl"
        striped
        verticalSpacing="xs"
        m="0"
      >
        <thead style={{height: 60, borderBottom: `2px solid ${theme.colors.slate[1]}`}}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.Header ??
                          header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} style={{height: 60, borderBottom: `2px solid ${theme.colors.slate[1]}`}}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.Cell ?? cell.column.columnDef.cell,
                    cell.getContext(),
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </MantineTable>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
    </Stack>
  );
}
