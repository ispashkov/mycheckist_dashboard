import { PaginationParams } from 'interfaces'

export const getCount = (page: PaginationParams): number => (page ? page.totalElements : 0)

export const getPerPage = (page: PaginationParams): number => (page ? page.size : 5)

export const getPageNumber = (page: PaginationParams): number => (page ? page.number : 0)

export const rowsPerPageOptions = [5, 10, 15, 20]
