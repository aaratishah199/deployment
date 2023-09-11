import { useMemo, useState, useEffect } from 'react'
import {
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table'
import { TextAxalp } from 'components/Typography'
import theme from 'constants/theme'

export type Person = {
  name: string
  age: number
}

const data = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
]

export default function Table() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Header: () => <TextAxalp fz={theme.fontSizes.md}>Name</TextAxalp>,
        // Cell: ({ cell }: { cell: { getValue: () => ReactNode } }) => (
        //   <span>{cell.getValue()}</span>
        // ), //optional custom cell render
      },
      {
        // accessorFn: (row: { age: number }) => row.age, //alternate way
        accessorKey: 'age',
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: () => <TextAxalp fz={theme.fontSizes.md}>Age</TextAxalp>, //optional custom header render
      },
    ],
    []
  )

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({})

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection])

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: false, //disable a default feature
    onRowSelectionChange: setRowSelection, //hoist row selection state to your state
    state: { rowSelection },
  })

  return <MantineReactTable table={table} />
}
