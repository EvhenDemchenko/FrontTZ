import React, {useState} from "react";
import {Link} from "react-router-dom";
//components
import {Pagination} from "../components/Pagination";
import {EmptyItemsInfo} from "../components/EmptyItemsInfo";
import {TableInfoItem} from "../components/TableInfoItem";
//redux
import {useAppSelector} from "../hooks/redux.selectors";


export const FullInfoPage = () => {
    const reducedItems = useAppSelector(state => state.vinDecoder.reducedItems)

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(15)
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItems = reducedItems.slice(firstItemIndex, lastItemIndex)

    const paginate = (pageNumber: number): void => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className='container'>
            <Link className='fullInfoPage_link' to={'/'}> back to quick info </Link>
            {reducedItems.length ?
                (<>
                        <table className="paleBlueRows">
                            <thead>
                            <tr>
                                <th>Group Name</th>
                                <th>Element</th>
                                <th>Description</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(item => <TableInfoItem key={item.ID} VehicleInformation={item}/>)}
                            </tbody>
                        </table>

                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={reducedItems.length}
                            paginate={paginate}
                        />
                    </>
                )
                : (<EmptyItemsInfo/>)
            }
        </div>
    )
}