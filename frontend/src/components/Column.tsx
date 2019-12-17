/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import useKanbanBoardState from 'hooks/useKanbanBoardState'
import { KanbanColunm } from 'types'
import Card from 'components/Card'
const { Flex } = require('@theme-ui/components')

export default function Column({ name, id }: KanbanColunm) {
  const { cards } = useKanbanBoardState()
  const columnCards = cards.filter(card => card.column === id)
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        bg: 'column',
        p: 2,
        borderTadius: 5,
        height: '100',
      }}
    >
      <Styled.h3>{name}</Styled.h3>
      {columnCards && columnCards.map(card => <Card key={card.id} {...card} />)}
    </Flex>
  )
}
