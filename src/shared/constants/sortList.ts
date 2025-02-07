import { SortListItem } from '../../features/sort/ui/Sort'

import { sortNameEnum, sortPropertyEnum } from '../../features/sort/model/sort-types'

export const sortList: SortListItem[] = [
  { name: sortNameEnum.RATING_DESC, sortProperty: sortPropertyEnum.RATING_DESC },
  { name: sortNameEnum.RATING_ASC, sortProperty: sortPropertyEnum.RATING_ASC },
  { name: sortNameEnum.PRICE_DESC, sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: sortNameEnum.PRICE_ASC, sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: sortNameEnum.TITLE_DESC, sortProperty: sortPropertyEnum.TITLE_DESC },
  { name: sortNameEnum.TITLE_ASC, sortProperty: sortPropertyEnum.TITLE_ASC },
]
