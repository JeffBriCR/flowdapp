/** @jsx jsx */
import { jsx } from 'theme-ui'
import useKanbanBoardState from 'hooks/useKanbanBoardState'
import Column from 'components/Column'

const { Grid } = require('@theme-ui/components')

export default function Board() {
  const { columns } = useKanbanBoardState()

  return (
    // TODO: use Grid component from theme-ui
    <Grid gap={5} p={10} columns={[1, null, 5]} bg={'primary'}>
      {columns && columns.map(column => <Column key={column.id} {...column} />)}
    </Grid>
  )
}
