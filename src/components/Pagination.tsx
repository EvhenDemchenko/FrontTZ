type IProps = {
    itemsPerPage: number,
    totalItems: number,
    paginate: (pageNumber: number) => void
    currentPage: number
}

export const Pagination = ({currentPage, itemsPerPage, totalItems, paginate}: IProps) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='pagination_container'>
            {pageNumbers.map(number => (<li
                className={currentPage=== number ? 'pagination_item-active':'pagination_item'}
                key={number}>
                <a href="#" onClick={(e) => {
                    e.preventDefault()
                    paginate(number)
                }}> {number} </a>
            </li>))}
        </ul>
    )
}