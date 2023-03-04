import React, {useEffect, useRef, useState} from "react";
//redux
import {useAppSelector} from "../hooks/redux.selectors";
import {setLastQueriesToLsThunk} from "../store/thunks/setLastQueriesToLs.thunk";
import {useDispatch} from "react-redux";
//models
import {LastQueriesModal} from "./LastQueriesModal";
//helpers
import {validateVin} from "../helpers/regExValidation";
//
import {toast} from "react-toastify";


interface IProps {
    handleSearchVehicleByVin: (searchedValue: string) => void,
    handleSetModalRef: (ref: HTMLInputElement) => void
}

export const Navigation = (props: IProps) => {

    const [isValid, setIsValid] = useState<boolean>(false);
    const dispatch: any = useDispatch()
    const history = useAppSelector(state => state.vinDecoder.history)
    const [searchedValue, setSearchedValue] = useState('');
    const {handleSearchVehicleByVin, handleSetModalRef} = props;
    const modalRef: any = useRef()
    const modalState = useAppSelector(state => state.vinDecoder.modalState)


    const fetchVehicleVinData = (params: string, isHistory: boolean = false) => {
        if (!isHistory) {
            if (!isValid) {
                toast.error('incorrect data in the input field', {theme: 'colored', autoClose: 3000})
                toast.error('incorrect invalid VIN format ', {theme: 'colored', autoClose: 4000,})
                return toast.error('Please check your VIN CODE  ', {theme: 'colored', autoClose: 5000,})
            }
        }
        handleSearchVehicleByVin(params)
        dispatch(setLastQueriesToLsThunk(params))

    }

    const inputValidation = (e: any) => {
        setSearchedValue(e.target.value.toUpperCase())
        setIsValid(Boolean(validateVin(e.target.value)))
    }

    useEffect(() => {
        if (modalRef) {
            handleSetModalRef(modalRef.current)
        }
    }, [])

    return (
        <nav className='heading'>
            <form onSubmit={e => e.preventDefault()} className='heading_container'>
                <input
                    className='heading_input'
                    ref={modalRef}
                    maxLength={17}
                    name='vin'
                    placeholder='Type VIN code...'
                    value={searchedValue}
                    onChange={inputValidation}
                />
                {modalState && <LastQueriesModal
                    arr={history}
                    setSearchedValue={setSearchedValue}
                    fetchVehicleVinData={fetchVehicleVinData}
                />}
                <button className='heading_btn'
                        type="submit"
                        disabled={(searchedValue.length !== 17) && !isValid}
                        onClick={() => fetchVehicleVinData(searchedValue)}
                >
                    Search
                </button>
            </form>

        </nav>
    )
}
