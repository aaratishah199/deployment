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
import { Flex, Stack, Table as MantineTable, Text, Chip } from '@mantine/core'
import { TextMono } from 'components/Typography'
import { MoreHoriz } from 'iconoir-react'

import { MoreActionButton, TableData, TableHead, TableRow } from './Table.style'

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
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}>
            <Text fz={theme.fontSizes.md}>Branch Code</Text>
            <SortUp width={24} height={24} color={theme.colors.slate[4]} />
          </Flex>
        ),
        Cell: ({ row }) => {
          return (
            <TextMono
              fz={theme.fontSizes.sm}
              fw={theme.fontWeights.medium}
              lh={'1.1375rem'}
            >
              {row.original.branchCode}
            </TextMono>
          )
        },
      },
      {
        accessorKey: 'branchName',
        id: 'Branch Name',
        header: 'Age',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}>
            <Text fz={theme.fontSizes.md}>Branch Name</Text>
            <SortUp width={24} height={24} color={theme.colors.slate[4]} />
          </Flex>
        ),
      },
      {
        accessorKey: 'address',
        id: 'Address',
        header: 'Address',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}>
            <Text fz={theme.fontSizes.md}>Address</Text>
            <SortUp width={24} height={24} color={theme.colors.slate[4]} />
          </Flex>
        ),
      },
      {
        accessorKey: 'contactDetails',
        id: 'Contact Details',
        header: 'Contact Details',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}>
            <Text fz={theme.fontSizes.md}>Contact Details</Text>
            <SortUp width={24} height={24} color={theme.colors.slate[4]} />
          </Flex>
        ),
      },
      {
        accessorKey: 'status',
        id: 'Status',
        header: 'Status',
        Header: () => (
          <Flex direction={'row'} gap={theme.spacing.sm}>
            <Text
              fz={theme.fontSizes.md}
              fw={theme.fontWeights.bold}
              lh={theme.lineHeights.md}
              color={theme.colors.slate[6]}
            >
              Status
            </Text>
            <SortUp width={24} height={24} color={theme.colors.slate[4]} />
          </Flex>
        ),
        Cell: ({ row }) => {
          return (
            <Chip tt={'capitalize'} color='red' variant='filled'>{row.original.status}</Chip>
          )
        },
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

    mantinePaperProps: {
      shadow: 'none',
    },
  })

  return (
    <Stack>
      <MantineTable fontSize='lg' highlightOnHover striped m='0'>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.Header ??
                          header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </TableHead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableData key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.Cell ?? cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableData>
              ))}
              <TableData>
                <MoreActionButton>
                  <MoreHoriz
                    width={24}
                    height={24}
                    color={theme.colors.slate[7]}
                  />
                </MoreActionButton>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </MantineTable>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
    </Stack>
  )
}
