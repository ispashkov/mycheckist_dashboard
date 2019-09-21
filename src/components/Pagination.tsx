import React, { PureComponent } from 'react'
import TablePagination, { LabelDisplayedRowsArgs } from '@material-ui/core/TablePagination'
import { getCount, getPageNumber, getPerPage, rowsPerPageOptions as rowPerPage } from '../utils/pagination'
import { PaginationParams } from '../interfaces'

interface IProps {
  page: PaginationParams | null
  labelRowsPerPage: string
  rowsPerPageOptions: number[]
  onChangePage(event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number): void
  onChangeRowsPerPage(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void
}

class Pagination extends PureComponent<IProps> {
  static defaultProps = {
    page: null,
    labelRowsPerPage: 'Рядов на странице:',
    rowsPerPageOptions: rowPerPage,
  }

  renderLabelDisplayedRows = ({ from, to, count }: LabelDisplayedRowsArgs) => {
    return `${from}-${to} из ${count}`
  }

  render(): React.ReactNode {
    const { page, onChangePage, onChangeRowsPerPage, rowsPerPageOptions, labelRowsPerPage } = this.props

    const count: number = getCount(page as PaginationParams)
    const pageNumber: number = getPageNumber(page as PaginationParams)
    const rowsPerPage: number = getPerPage(page as PaginationParams)

    return (
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={count}
        page={pageNumber}
        rowsPerPage={rowsPerPage}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        labelRowsPerPage={labelRowsPerPage}
        labelDisplayedRows={this.renderLabelDisplayedRows}
      />
    )
  }
}

export default Pagination
