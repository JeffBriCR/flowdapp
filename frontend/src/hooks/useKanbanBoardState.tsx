import { KanbanBoardState } from 'types'

export default function useKanbanBoardState(): KanbanBoardState {
  return {
    columns: [
      { name: 'Discussion', id: 1 },
      { name: 'To Do', id: 2 },
      { name: 'Doing', id: 3 },
      { name: 'Review', id: 4 },
      { name: 'Done', id: 5 },
    ],
    cards: [
      { title: 'Card 1', description: 'Some description', id: 1, column: 1 },
      { title: 'Card 2', description: 'Some description', id: 2, column: 2 },
      { title: 'Card 3', description: 'Some description', id: 3, column: 1 },
      { title: 'Card 4', description: 'Some description', id: 4, column: 4 },
      { title: 'Card 5', description: 'Some description', id: 5, column: 5 },
    ],
  }
}
