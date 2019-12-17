/** @jsx jsx */
import { jsx } from 'theme-ui'
import useKanbanBoardState from 'hooks/useKanbanBoardState'
import Column from 'components/Column'

export default function Board() {
  const { columns } = useKanbanBoardState()

  return (
    // TODO: use Grid component from theme-ui
    <div
      sx={{
        display: 'grid',
        height: '100%',
        background: '#00a5c5',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto',
        gridColumnGap: 5,
        padding: 10,
      }}
    >
      {columns && columns.map(column => <Column key={column.id} {...column} />)}
    </div>
  )
}

// function Board(): JSX.Element {
//   const StyledBoard = styled.div`
// height: 100%;
// background: #00a5c5;
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
// grid-template-rows: auto;
// grid-column-gap: 5px;
// padding: 10px;
//   `
//   const { columns } = useBoardState()

//   return <StyledBoard>{columns && columns.map(column => <Column key={column.id} column={column} />)}</StyledBoard>
// }
