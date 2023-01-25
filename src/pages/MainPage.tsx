import React from "react";
import {Link} from "react-router-dom";
//redux
import {useAppSelector} from "../hooks/redux.selectors";
//components
import {MainPageItem} from "../components/MainPageItem";
import {EmptyItemsInfo} from "../components/EmptyItemsInfo";
//
import { v4 as getUniqueID } from 'uuid';

export const MainPage = () => {
    const validItems = useAppSelector(state => state.vinDecoder.validItems)
    return (
        <div className='mainPage container'>
            <Link className=' mainPage_link-container' to={'/full'}> Watch full info </Link>
            {validItems.length ? <ul className='mainPage_content'>
                    {validItems?.map(item => <MainPageItem key={getUniqueID()}
                                                           VehicleValues={item}/>)}
                </ul>
                : <EmptyItemsInfo/>
            }
        </div>
    )
}


