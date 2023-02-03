export enum SortProperyEmun{
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export type Sort = {
    name: string;
    sortProperty: SortProperyEmun;
  }

export interface FilterSliceState{
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
}