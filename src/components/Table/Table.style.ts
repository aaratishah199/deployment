import styled from '@emotion/styled'
import theme from 'constants/theme'

export const TableHead = styled('thead')`
  height: 3.75rem;
  border-bottom: 2px solid ${theme.colors.slate[1]};
`

export const TableRow = styled('tr')`
  height: 3.75rem;
  border-bottom: 2px solid ${theme.colors.slate[1]};
`

export const TableData = styled('td')`
  font-size: 0.875rem !important;
  font-weight: ${theme.fontWeights.medium} !important;
  line-height: 1.09375rem;
`

export const MoreActionButton = styled('div')`
    padding: 0.4375rem;
    border-radius: ${theme.borderRadius.pill};
    background: ${theme.colors.slate[1]};
    display: inline-flex;
`