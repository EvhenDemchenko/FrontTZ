import React, {useEffect, useRef, useState} from "react";
//redux
import {useAppSelector} from "../hooks/redux.selectors";
import {setLastQueriesToLsThunk} from "../store/thunks/setLastQueriesToLs.thunk";
import {useDispatch} from "react-redux";
//models
import {LastQueriesModal} from "./LastQueriesModal";


interface IProps {
    handleSearchVehicleByVin: (searchedValue: string) => void,
    handleSetModalRef: (ref: HTMLInputElement) => void
}

export const Navigation = (props: IProps) => {

    const dispatch: any = useDispatch()
    const history = useAppSelector(state => state.vinDecoder.history)
    const [searchedValue, setSearchedValue] = useState('');
    const {handleSearchVehicleByVin, handleSetModalRef} = props;
    const modalRef: any = useRef()
    const modalState = useAppSelector(state => state.vinDecoder.modalState)

    const fetchVehicleVinData = (params: string) => {
        handleSearchVehicleByVin(params)
        dispatch(setLastQueriesToLsThunk(params))
    }
    useEffect(() => {
        if (modalRef) {
            handleSetModalRef(modalRef.current)
        }
    }, [])

    return (
        <nav className='heading'>
            <div className='heading_container'>
                <input
                    className='heading_input'
                    ref={modalRef}
                    maxLength={17}
                    placeholder='Type VIN code...'
                    value={searchedValue}
                    onChange={e => setSearchedValue(e.target.value)}
                />
                {modalState && <LastQueriesModal
                    arr={history}
                    fetchVehicleVinData={fetchVehicleVinData}
                />}
            </div>
            <button className='heading_btn'
                disabled={searchedValue.length !== 17}
                onClick={() => fetchVehicleVinData(searchedValue)}
            >
                Search
            </button>
        </nav>
    )
}
