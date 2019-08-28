import React, { useMemo } from 'react'
import styled from '@emotion/styled'


type Colunm = {
  name: string
  id: number
}

type Card = {
  title: string
  description: string
  id: number
  column: number
}

type BoardState = {
  columns: Array<Colunm>
  cards: Array<Card>
}

function useBoardState (): BoardState {
  return {
    columns: [
      {name: 'Discussion', id: 1},
      {name: 'To Do', id: 2},
      {name: 'Doing', id: 3},
      {name: 'Review', id: 4},
      {name: 'Done', id: 5}
    ],
    cards: [
      {title: 'Card 1', description: 'Some description', id: 1, column:1},
      {title: 'Card 2', description: 'Some description', id: 2, column:2},
      {title: 'Card 3', description: 'Some description', id: 3, column:1},
      {title: 'Card 4', description: 'Some description', id: 4, column:4},
      {title: 'Card 5', description: 'Some description', id: 5, column:5}
    ]
  }
}

function Card ({card}: { card: Card }) : JSX.Element {
  const Card = styled.div`
    background: #f7f7f7;
    border-radius: 5px;
    justify-self: center;
    margin-bottom: 10px;
    padding: 0 10px 10px 10px;
  `
  return (
    <Card>
      <h5>{card.title}</h5>
      <p>{card.description}</p>
    </Card>
  )
}

function Column ({column}: { column: Colunm }) : JSX.Element {
  const {cards} = useBoardState()
  const columnCards = useMemo(()=>{
    return cards.filter(card => card.column === column.id)
  }, [cards, column])

  const Column = styled.div`
    display: flex;
    flex-direction: column;
    background: #e8e9ee;
    padding: 10px;
    border-radius: 5px;
    height: 100%;
  `
  return (
    <Column>
      <h3>{column.name}</h3>
      {
        columnCards && columnCards.map(card => <Card key={card.id} card={card}></Card>)
      }
    </Column>
  )
}

function Board () : JSX.Element {
  const Board = styled.div`
    height: 100%;
    background : #00a5c5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    padding: 10px;
  `
  const {columns} = useBoardState()

  return (
    <Board>
    {
      columns && columns.map(column => <Column key={column.id}column={column}/>)
    }
    </Board>
  );
}


export default function App () : JSX.Element {

  return (
    <Board/>
  );
}
