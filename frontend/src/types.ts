export type SingleChild = { children: JSX.Element }
export type MoreThanOneChild = { children: JSX.Element[] }
export type OneOrMoreChildren = { children: JSX.Element | JSX.Element[] }

export type KanbanColunm = {
  name: string
  id: number
}

export type KanbanCard = {
  title: string
  description: string
  id: number
  column: number
}

export type KanbanBoardState = {
  columns: Array<KanbanColunm>
  cards: Array<KanbanCard>
}
