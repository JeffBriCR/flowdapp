/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { KanbanCard } from 'types'
const { Box } = require('@theme-ui/components')

export default function Card({ title, description }: KanbanCard) {
  return (
    // TODO: use values from theme.ts - Gabo
    <Box
      mb="2"
      sx={{
        background: ' #f7f7f7',
        borderRadius: 5,
        justifySelf: 'center',
        padding: '0 10px 10px 10px',
      }}
    >
      <Styled.h5>{title}</Styled.h5>
      <p>{description}</p>
    </Box>
  )
}
