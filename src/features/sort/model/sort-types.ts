export enum sortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}

export enum sortNameEnum {
  RATING_DESC = 'популярности ↓',
  RATING_ASC = 'популярности ↑',
  PRICE_DESC = 'цене ↓',
  PRICE_ASC = 'цене ↑',
  TITLE_DESC = 'алфавиту ↓',
  TITLE_ASC = 'алфавиту ↑',
}

export interface Sort {
  name: string
  sortProperty: sortPropertyEnum
}

export interface SortSliceState {
  sort: Sort
}
